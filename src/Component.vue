<template>
    <div class="w-full">
        <div>
            <label class="block text-sm font-bold mb-2">Sidebar Style</label>
            <div class="relative">
                <select class="input" v-model="sidebarMode" @change="save()">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
            </div>
        </div>

        <div class="mt-4">
            <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox" v-model="sidebarCollapsed" @change="save">
                <span class="ml-2">Sidebar starts collapsed</span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pluginData: {},
            sidebarMode: 'dark',
            sidebarCollapsed: true,
        }
    },

    created() {
        this.pluginData = window.vemtoApi.getPluginData()
        this.sidebarMode = this.pluginData.sidebarMode
        this.sidebarCollapsed = this.pluginData.sidebarCollapsed
    },

    methods: {
        save() {
            window.vemtoApi.savePluginData({
                sidebarMode: this.sidebarMode,
                sidebarCollapsed: this.sidebarCollapsed,
            })
        }
    }
}
</script>