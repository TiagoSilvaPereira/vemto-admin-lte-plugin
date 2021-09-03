<template>
    <div class="w-full">
        Admin LTE plugin
        <!-- <label class="block text-sm font-bold">Tenant Field Name</label>
        <small class="mb-2">The field that identifies the relationship of a Model with the Tenant (authenticated user)</small>
        <input class="input" type="text" v-model="tenantFieldName" @input="save"> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            pluginData: {},
            sidebarMode: 'dark',
        }
    },

    created() {
        this.pluginData = window.vemtoApi.getPluginData()
        this.sidebarMode = this.pluginData.sidebarMode
    },

    methods: {
        save() {
            window.vemtoApi.savePluginData({
                sidebarMode: this.sidebarMode,
            })
        }
    }
}
</script>