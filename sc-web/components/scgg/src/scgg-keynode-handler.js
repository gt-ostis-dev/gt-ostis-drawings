SCggKeynodesHandler = {

    systemIds: [
        'format_scs_json',
        'nrel_gt_idtf',
        'concept_graph',
        'nrel_weight',
        'sc_garbage',
        'nrel_temporal_decomposition',
        'nrel_temporal_inclusion',
        'rrel_current_version',
        'rrel_vertex',
        'rrel_oredge',
        'temporary_entity',
        'ui_menu_solving_simple_task',
        'ui_graph_resolve_choose',
        'ui_graph_resolve',
        'ui_graph_resolve_param',
        'rrel_1',
        'rrel_2',
        'rrel_3',
        'rrel_4',
        'rrel_5',
        'rrel_6'
    ],

    scKeynodes: {},

    load: false,

    initSystemIds : function (callback){
        var self = this;
        SCWeb.core.Server.resolveScAddr(this.systemIds, function (keynodes) {
            Object.getOwnPropertyNames(keynodes).forEach(function(key) {
                console.log('Resolved keynode: ' + key + ' = ' + keynodes[key]);
                self.scKeynodes[key] = keynodes[key];
            });
            self.load = true;
            callback();
        });
    }

};
