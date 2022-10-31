**Primary Environment**: [${globals.protocol}://${settings.envName}-1.${globals.domain-1}/](${globals.protocol}://${settings.envName}-1.${globals.domain-1}/)    
**Secondary Environment**: [${globals.protocol}://${settings.envName}-2.${globals.domain-2}/](${globals.protocol}://${settings.envName}-2.${globals.domain-2}/)  

**Site URL**: [${globals.protocol}://${globals.domain}/](${globals.protocol}://${globals.domain}/)  

**CDN Endpoint URL**:  [${globals.cdn_url}](${globals.cdn_url})

Use the following credentials to access the admin panel:

**Admin Panel**: [${globals.protocol}://${globals.domain}/wp-admin/](${globals.protocol}://${globals.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

Manage the LiteSpeed ADC nodes using the next credentials:

**Admin Console 1**: [https://node${globals.master_id_bl-1}-${settings.envName}-1.${globals.domain-1}:4848](https://node${globals.master_id_bl-1}-${settings.envName}-1.${globals.domain-1}:4848)   
**Admin Console 2**: [https://node${globals.master_id_bl-2}-${settings.envName}-2.${globals.domain-2}:4848](https://node${globals.master_id_bl-2}-${settings.envName}-2.${globals.domain-2}:4848)   
**Username**: admin    
**Password**: ${globals.ls_admin_pass}  

Manage the LiteSpeed WEB nodes using the next credentials:

**Admin Console 1**: [https://node${globals.master_id_cp-1}-${settings.envName}-1.${globals.domain-1}:4848](https://node${globals.master_id_cp-1}-${settings.envName}-1.${globals.domain-1}:4848)   
**Admin Console 2**: [https://node${globals.master_id_cp-2}-${settings.envName}-2.${globals.domain-2}:4848](https://node${globals.master_id_cp-2}-${settings.envName}-2.${globals.domain-2}:4848)   
**Username**: admin    
**Password**: ${globals.ls_admin_pass}   

Manage the database nodes using the next credentials:

**phpMyAdmin Panel 1**: [https://node${globals.master_id_galera-1}-${settings.envName}-1.${globals.domain-1}/](https://node${globals.master_id_galera-1}-${settings.envName}-1.${globals.domain-1}/)   
**phpMyAdmin Panel 2**: [https://node${globals.master_id_galera-2}-${settings.envName}-2.${globals.domain-2}/](https://node${globals.master_id_galera-2}-${settings.envName}-2.${globals.domain-2}/)   
**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}   
