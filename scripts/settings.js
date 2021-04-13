import com.hivext.api.Response;
import org.yaml.snakeyaml.Yaml;
import com.hivext.api.core.utils.Transport;

var cdnAppid = "c05ffa5b45628a2a0c95467ebca8a0b4";
var lsAppid = "9e6afcf310004ac84060f90ff41a5aba";
var group = jelastic.billing.account.GetAccount(appid, session);
var isCDN = jelastic.dev.apps.GetApp(cdnAppid);
var isLS = jelastic.dev.apps.GetApp(lsAppid);

//checking quotas
var perEnv = "environment.maxnodescount",
      maxEnvs = "environment.maxcount",
      perNodeGroup = "environment.maxsamenodescount",
      maxCloudletsPerRec = "environment.maxcloudletsperrec";
var   nodesPerEnvMin = 9,
      nodesPerGroupMin = 3,
      maxCloudlets = 16,
      markup = "", cur = null, text = "used", prod = true;

var settings = jps.settings;
var fields = {};
for (var i = 0, field; field = jps.settings.fields[i]; i++)
  fields[field.name] = field;

var quotas = jelastic.billing.account.GetQuotas(perEnv + ";"+maxEnvs+";" + perNodeGroup + ";" + maxCloudletsPerRec ).array;
var group = jelastic.billing.account.GetAccount(appid, session);
for (var i = 0; i < quotas.length; i++){
    var q = quotas[i], n = toNative(q.quota.name);

    if (n == maxCloudletsPerRec && maxCloudlets > q.value){
        err(q, "required", maxCloudlets, true);
        prod  = false; 
    }
    
    if (n == perEnv && nodesPerEnvMin > q.value){
        if (!markup) err(q, "required", nodesPerEnvMin, true);
        prod = false;
    }

    if (n == perNodeGroup && nodesPerGroupMin > q.value){
        if (!markup) err(q, "required", nodesPerGroupMin, true);
        prod = false;
    }
    
    if (isLS.result == 0 || isLS.result == Response.PERMISSION_DENIED) {
      fields["wp_protect"].disabled = false;
      fields["wp_protect"].value = true;
      fields["waf"].disabled = false;
      fields["waf"].value = true;         
    } else {
      prod = false;
      fields["wp_protect"].disabled = true;
      fields["wp_protect"].value = false;
      fields["waf"].disabled = true;
      fields["waf"].value = false;
    }
    
    if (isCDN.result == 0 || isCDN.result == Response.PERMISSION_DENIED) {
      fields["cdn_addon"].hidden = false;
      fields["cdn_addon"].value = true;
    } else {
      fields["cdn_addon"].hidden = true;
      fields["cdn_addon"].value = false;
    }
    
    var extIP = jelastic.billing.account.GetQuotas('environment.externalip.enabled');
    var extIPperEnv = jelastic.billing.account.GetQuotas('environment.externalip.maxcount');
    var extIPperNode = jelastic.billing.account.GetQuotas('environment.externalip.maxcount.per.node');

    if ((extIP.result == 0 && extIP.array[0].value) && (extIPperEnv.result == 0 && extIPperEnv.array[0].value >= 2) && (extIPperNode.result == 0 && extIPperNode.array[0].value >= 1)) {
      fields["le_addon"].disabled = false;
      fields["le_addon"].value = true;
    }
}

if (!prod || group.groupType == 'trial') {
  fields["le_addon"].disabled = true;
  fields["le_addon"].value = false;
  fields["cdn_addon"].disabled = true;
  fields["cdn_addon"].value = false;
  fields["displayfield"].markup = "Advanced features are not available.";
  fields["displayfield"].cls = "warning";
  fields["displayfield"].hideLabel = true;
  fields["displayfield"].height = 25;
  if (isLS.result != 0 || isLS.result != Response.PERMISSION_DENIED)
    fields["bl_count"].markup = "LiteSpeed software stack templates are not supported at the moment.";
  if (group.groupType == 'trial')
    fields["bl_count"].markup = "WordPress multiregion cluster is not available for " + group.groupType + ". Please upgrade your account.";
  fields["bl_count"].cls = "warning";
  fields["bl_count"].hidden = false;
  fields["bl_count"].height = 30;
  
  
  settings.fields.push(
    {"type": "compositefield","height": 0,"hideLabel": true,"width": 0,"items": [{"height": 0,"type": "string","required": true}]}
  );
}

return {
    result: 0,
    settings: settings
};

function err(e, text, cur, override){
  var m = (e.quota.description || e.quota.name) + " - " + e.value + ", " + text + " - " + cur + ". ";
  if (override) markup = m; else markup += m;
}
