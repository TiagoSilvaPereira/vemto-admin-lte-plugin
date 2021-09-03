module.exports = (vemto) => {

    return {

        canInstall() {
            let projectSettings = vemto.getProjectSettings()

            if(projectSettings.cssFramework !== 'bootstrap') {
                vemto.addBlockReason('This plugin is only compatible with Bootstrap projects')
                return false
            }

            if(projectSettings.uiTemplate !== 'laravel_ui') {
                vemto.addBlockReason('This plugin is only compatible with Laravel UI templates')
                return false
            }
            
            return true
        },

        onInstall() {
            vemto.savePluginData({
                sidebarMode: 'dark'
            })
        },

        templateReplacements() {
            vemto.log.message('Replacing stubs for Admin LTE...')
            
            let basePath = '/views/frameworks/bootstrap'

            vemto.replaceTemplate(`${basePath}/AppLayout.vemtl`, 'files/AppLayout.vemtl')
        }

    }

}