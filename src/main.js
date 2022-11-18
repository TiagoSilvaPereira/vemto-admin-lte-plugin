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
                sidebarMode: 'light',
                sidebarCollapsed: false,
            })
        },

        templateReplacements() {
            vemto.log.message('Replacing stubs for AdminLTE...')

            let basePath = '/views/frameworks/bootstrap'

            vemto.replaceTemplate(`${basePath}/AppLayout.vemtl`, 'files/AppLayout.vemtl')
            vemto.replaceTemplate(`${basePath}/IndexView.vemtl`, 'files/IndexView.vemtl')
            vemto.replaceTemplate(`${basePath}/AppNav.vemtl`, 'files/AppNav.vemtl')
            vemto.replaceTemplate(`${basePath}/AppLayout_MainDiv.vemtl`, 'files/AppLayout_MainDiv.vemtl')
            vemto.replaceTemplate(`${basePath}/AppLayout_MainHeaderContent.vemtl`, 'files/AppLayout_MainHeaderContent.vemtl')

            vemto.log.message('Gerando arquivos personalizados...')
            vemto.replaceTemplate(`${basePath}/CreateView.vemtl`, 'files/CreateView.vemtl')
            vemto.replaceTemplate(`${basePath}/IndexView.vemtl`, 'files/IndexView.vemtl')
            vemto.replaceTemplate(`${basePath}/IndexView_Searchbar.vemtl`, 'files/IndexView_Searchbar.vemtl')
            vemto.replaceTemplate(`${basePath}/IndexView_Table.vemtl`, 'files/IndexView_Table.vemtl')
            vemto.replaceTemplate(`${basePath}/ShowView.vemtl`, 'files/ShowView.vemtl')
            vemto.replaceTemplate(`${basePath}/EditView.vemtl`, 'files/EditView.vemtl')
        },

        beforeRenderIndexView(template, content) {
            vemto.log.message('Replacing some IndexView CSS classes...')

            return content.replace('searchbar mt-4 mb-5', 'searchbar mt-0 mb-4')
        },

        beforeCodeGenerationEnd() {
            vemto.log.message('Generating specific AdminLTE files...')

            vemto.renderTemplate('/files/Sidebar.vemtl', '/resources/views/layouts/sidebar.blade.php')
        }

    }

}
