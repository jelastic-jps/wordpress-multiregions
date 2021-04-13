function getList(envName, items) {
    var result = [],
        index = 0,
        itemData,
        targetEnvNamePrefix;

    function dataExtractor(envName) {
        var envNameSeparator = "-",
            index,
            tmp;

        tmp = envName.split(envNameSeparator);
        index = tmp.pop();
        
        if (/\d+/.test(index)) {
            index = parseInt(index, 10);
        } else {
            index = null;
        }        

        return {
            envName: envName, 
            envNamePrefix: tmp.join(envNameSeparator),
            index: index
        };

    }

    function filter(data) {
        return data.envNamePrefix === targetEnvNamePrefix && 
                typeof data.index === "number" && !isNaN(data.index);
    }
   
    targetEnvNamePrefix = dataExtractor(envName).envNamePrefix; 

    for(var i=0, item; item = items[i]; i++) {
        itemData = dataExtractor(item.env.envName);

        if (filter(itemData)) {
            result.push(itemData.envName);
            index = Math.max(index, itemData.index);
        }        
    }

    return {
        items       : result,
        nextIndex   : index + 1
    };
}

var resp = jelastic.environment.control.GetEnvs(appid, session);

if (resp.result != 0) return resp;

var data = getList(envName, resp.infos);

return { 
    result: 0,
    items: data.items,
    nextIndex: data.nextIndex
};
