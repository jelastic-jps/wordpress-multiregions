**Primary Environment**: [${globals.protocol}://${settings.envName}-1.${globals.domain-1}/](${globals.protocol}://${settings.envName}-1.${globals.domain-1}/)   
**Secondary Environment 1**: [${globals.protocol}://${settings.envName}-2.${globals.domain-2}/](${globals.protocol}://${settings.envName}-2.${globals.domain-2}/)   
**Secondary Environment 2**: [${globals.protocol}://${settings.envName}-3.${globals.domain-3}/](${globals.protocol}://${settings.envName}-3.${globals.domain-3}/)   
**Secondary Environment 3**: [${globals.protocol}://${settings.envName}-4.${globals.domain-4}/](${globals.protocol}://${settings.envName}-4.${globals.domain-4}/)   
**Secondary Environment 4**: [${globals.protocol}://${settings.envName}-5.${globals.domain-5}/](${globals.protocol}://${settings.envName}-5.${globals.domain-5}/)   

**Site URL**: [${globals.protocol}://${globals.domain}/](${globals.protocol}://${globals.domain}/)  

Use the following credentials to access the admin panel:

**Admin Panel**: [${globals.protocol}://${globals.domain}/wp-admin/](${globals.protocol}://${globals.domain}/wp-admin/)  
**Login**: ${user.email}  
**Password**: ${globals.wp_admin_pass}  

Manage the LiteSpeed ADC nodes using the next credentials:

**Primary Admin Console**: [https://node${globals.master_id_bl-1}-${settings.envName}-1.${globals.domain-1}:4848](https://node${globals.master_id_bl-1}-${settings.envName}-1.${globals.domain-1}:4848)   
**Secondary Admin Console 1**: [https://node${globals.master_id_bl-2}-${settings.envName}-2.${globals.domain-2}:4848](https://node${globals.master_id_bl-2}-${settings.envName}-2.${globals.domain-2}:4848)   
**Secondary Admin Console 2**: [https://node${globals.master_id_bl-3}-${settings.envName}-3.${globals.domain-3}:4848](https://node${globals.master_id_bl-3}-${settings.envName}-3.${globals.domain-3}:4848)   
**Secondary Admin Console 3**: [https://node${globals.master_id_bl-4}-${settings.envName}-4.${globals.domain-4}:4848](https://node${globals.master_id_bl-4}-${settings.envName}-4.${globals.domain-4}:4848)   
**Secondary Admin Console 4**: [https://node${globals.master_id_bl-5}-${settings.envName}-5.${globals.domain-5}:4848](https://node${globals.master_id_bl-5}-${settings.envName}-5.${globals.domain-5}:4848)   
**Username**: admin    
**Password**: ${globals.ls_admin_pass}  

Manage the LiteSpeed WEB nodes using the next credentials:

**Primary Admin Console**: [https://node${globals.master_id_cp-1}-${settings.envName}-1.${globals.domain-1}:4848](https://node${globals.master_id_cp-1}-${settings.envName}-1.${globals.domain-1}:4848)   
**Secondary Admin Console 1**: [https://node${globals.master_id_cp-2}-${settings.envName}-2.${globals.domain-2}:4848](https://node${globals.master_id_cp-2}-${settings.envName}-2.${globals.domain-2}:4848)   
**Secondary Admin Console 2**: [https://node${globals.master_id_cp-3}-${settings.envName}-3.${globals.domain-3}:4848](https://node${globals.master_id_cp-3}-${settings.envName}-3.${globals.domain-3}:4848)   
**Secondary Admin Console 3**: [https://node${globals.master_id_cp-4}-${settings.envName}-4.${globals.domain-4}:4848](https://node${globals.master_id_cp-4}-${settings.envName}-4.${globals.domain-4}:4848)   
**Secondary Admin Console 4**: [https://node${globals.master_id_cp-5}-${settings.envName}-5.${globals.domain-5}:4848](https://node${globals.master_id_cp-5}-${settings.envName}-5.${globals.domain-5}:4848)   
**Username**: admin    
**Password**: ${globals.ls_admin_pass}   

Manage the database nodes using the next credentials:

**Primary phpMyAdmin Panel**: [https://node${globals.master_id_galera-1}-${settings.envName}-1.${globals.domain-1}/](https://node${globals.master_id_galera-1}-${settings.envName}-1.${globals.domain-1}/)   
**Secondary phpMyAdmin Panel 1**: [https://node${globals.master_id_galera-2}-${settings.envName}-2.${globals.domain-2}/](https://node${globals.master_id_galera-2}-${settings.envName}-2.${globals.domain-2}/)   
**Secondary phpMyAdmin Panel 2**: [https://node${globals.master_id_galera-3}-${settings.envName}-3.${globals.domain-3}/](https://node${globals.master_id_galera-3}-${settings.envName}-3.${globals.domain-3}/)   
**Secondary phpMyAdmin Panel 3**: [https://node${globals.master_id_galera-4}-${settings.envName}-4.${globals.domain-4}/](https://node${globals.master_id_galera-4}-${settings.envName}-4.${globals.domain-4}/)   
**Secondary phpMyAdmin Panel 4**: [https://node${globals.master_id_galera-5}-${settings.envName}-5.${globals.domain-5}/](https://node${globals.master_id_galera-5}-${settings.envName}-5.${globals.domain-5}/)   
**Username**: ${globals.db_user}    
**Password**: ${globals.db_pass}   
