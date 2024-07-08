jQuery(function($) {
	var grid_data = 
	[ 

			{id: 1,
			Seccional: "ARMENIA",
			 Despacho: "JUZGADO 001 LABORAL DEL CIRCUITO DE ARMENIA",
			 ProcesosRecibidos: 308,
			 ProcMigradosInfoProcesal: 296,
			 ProcMigradosInfoDocumental: 205,
			 PorcEfectividadProcesal: 96.1,
			 PorcEfectividadDocumental: 66.6
			}
		,
			{id: 2,
			Seccional: "",
			 Despacho: "JUZGADO 002 LABORAL DEL CIRCUITO DE ARMENIA",
			 ProcesosRecibidos: 186,
			 ProcMigradosInfoProcesal: 183,
			 ProcMigradosInfoDocumental: 10,
			 PorcEfectividadProcesal: 98.4,
			 PorcEfectividadDocumental: 5.4
			}
		,
			{id: 3,
			Seccional: "",
			 Despacho: "JUZGADO 003 LABORAL DEL CIRCUITO DE ARMENIA",
			 ProcesosRecibidos: 410,
			 ProcMigradosInfoProcesal: 393,
			 ProcMigradosInfoDocumental: 103,
			 PorcEfectividadProcesal: 95.9,
			 PorcEfectividadDocumental: 25.1
			}
		,
			{id: 4,
			Seccional: "",
			 Despacho: "JUZGADO 004 LABORAL DEL CIRCUITO DE ARMENIA",
			 ProcesosRecibidos: 365,
			 ProcMigradosInfoProcesal: 344,
			 ProcMigradosInfoDocumental: 173,
			 PorcEfectividadProcesal: 94.2,
			 PorcEfectividadDocumental: 47.4
			}
		,
			{id: 5,
			Seccional: "",
			 Despacho: "JUZGADO 001 MUNICIPAL DE PEQUENAS CAUSAS LABORALES DE ARMENIA",
			 ProcesosRecibidos: 396,
			 ProcMigradosInfoProcesal: 385,
			 ProcMigradosInfoDocumental: 231,
			 PorcEfectividadProcesal: 97.2,
			 PorcEfectividadDocumental: 58.3
			}
		,
			{id: 6,
			Seccional: "BOGOTA",
			 Despacho: "DESPACHO 003 DE LA SALA LABORAL DEL TRIBUNAL SUPERIOR DE BOGOTA",
			 ProcesosRecibidos: 128,
			 ProcMigradosInfoProcesal: 124,
			 ProcMigradosInfoDocumental: 1,
			 PorcEfectividadProcesal: 96.9,
			 PorcEfectividadDocumental: 0.8
			}
		,
			{id: 7,
			Seccional: "",
			 Despacho: "DESPACHO 004 DE LA SALA LABORAL DEL TRIBUNAL SUPERIOR DE BOGOTA",
			 ProcesosRecibidos: 153,
			 ProcMigradosInfoProcesal: 149,
			 ProcMigradosInfoDocumental: 0,
			 PorcEfectividadProcesal: 97.4,
			 PorcEfectividadDocumental: 0
			}
		,
			{id: 8,
			Seccional: "",
			 Despacho: "DESPACHO 008 DE LA SALA LABORAL DEL TRIBUNAL SUPERIOR DE BOGOTA",
			 ProcesosRecibidos: 319,
			 ProcMigradosInfoProcesal: 289,
			 ProcMigradosInfoDocumental: 6,
			 PorcEfectividadProcesal: 90.6,
			 PorcEfectividadDocumental: 1.9
			}
		,
			{id: 9,
			Seccional: "",
			 Despacho: "DESPACHO 011 DE LA SALA LABORAL DEL TRIBUNAL SUPERIOR DE BOGOTA",
			 ProcesosRecibidos: 94,
			 ProcMigradosInfoProcesal: 92,
			 ProcMigradosInfoDocumental: 0,
			 PorcEfectividadProcesal: 97.9,
			 PorcEfectividadDocumental: 0
			}
		,
			{id: 10,
			Seccional: "",
			 Despacho: "DESPACHO 013 DE LA SALA LABORAL DEL TRIBUNAL SUPERIOR DE BOGOTA",
			 ProcesosRecibidos: 59,
			 ProcMigradosInfoProcesal: 57,
			 ProcMigradosInfoDocumental: 0,
			 PorcEfectividadProcesal: 96.6,
			 PorcEfectividadDocumental: 0
			}
		,
			{id: 11,
			Seccional: "",
			 Despacho: "JUZGADO 11 LABORAL CIRCUITO BOGOTA",
			 ProcesosRecibidos: 343,
			 ProcMigradosInfoProcesal: 333,
			 ProcMigradosInfoDocumental: 0,
			 PorcEfectividadProcesal: 97.1,
			 PorcEfectividadDocumental: 0
			}
		,
			{id: 12,
			Seccional: "",
			 Despacho: "JUZGADO 19 LABORAL CIRCUITO BOGOTA",
			 ProcesosRecibidos: 41,
			 ProcMigradosInfoProcesal: 40,
			 ProcMigradosInfoDocumental: 34,
			 PorcEfectividadProcesal: 97.6,
			 PorcEfectividadDocumental: 82.9
			}
		,
			{id: 13,
			Seccional: "",
			 Despacho: "JUZGADO 33 LABORAL CIRCUITO BOGOTA",
			 ProcesosRecibidos: 1049,
			 ProcMigradosInfoProcesal: 1041,
			 ProcMigradosInfoDocumental: 709,
			 PorcEfectividadProcesal: 99.2,
			 PorcEfectividadDocumental: 67.6
			}
		,
			{id: 14,
			Seccional: "",
			 Despacho: "JUZGADO 37 LABORAL CIRCUITO BOGOTA",
			 ProcesosRecibidos: 918,
			 ProcMigradosInfoProcesal: 791,
			 ProcMigradosInfoDocumental: 417,
			 PorcEfectividadProcesal: 86.2,
			 PorcEfectividadDocumental: 45.4
			}
		,
			{id: 15,
			Seccional: "",
			 Despacho: "JUZGADO 002 MUNICIPAL DE PEQUENAS CAUSAS LABORALES DE BOGOTA",
			 ProcesosRecibidos: 141,
			 ProcMigradosInfoProcesal: 129,
			 ProcMigradosInfoDocumental: 97,
			 PorcEfectividadProcesal: 91.5,
			 PorcEfectividadDocumental: 68.8
			}
		,
			{id: 16,
			Seccional: "",
			 Despacho: "JUZGADO 003 MUNICIPAL DE PEQUENAS CAUSAS LABORALES DE BOGOTA",
			 ProcesosRecibidos: 475,
			 ProcMigradosInfoProcesal: 461,
			 ProcMigradosInfoDocumental: 321,
			 PorcEfectividadProcesal: 97.1,
			 PorcEfectividadDocumental: 67.6
			}
		,
			{id: 17,
			Seccional: "MANIZALES",
			 Despacho: "DESPACHO PRIMERO LABORAL DEL TRIBUNAL SUPERIOR DE MANIZALES",
			 ProcesosRecibidos: 158,
			 ProcMigradosInfoProcesal: 138,
			 ProcMigradosInfoDocumental: 70,
			 PorcEfectividadProcesal: 87.3,
			 PorcEfectividadDocumental: 44.3
			}
		,
			{id: 18,
			Seccional: "",
			 Despacho: "DESPACHO SEGUNDO LABORAL DEL TRIBUNAL SUPERIOR DE MANIZALES",
			 ProcesosRecibidos: 29,
			 ProcMigradosInfoProcesal: 19,
			 ProcMigradosInfoDocumental: 7,
			 PorcEfectividadProcesal: 65.5,
			 PorcEfectividadDocumental: 24.1
			}
		,
			{id: 19,
			Seccional: "",
			 Despacho: "DESPACHO TERCERO LABORAL DEL TRIBUNAL SUPERIOR DE MANIZALES",
			 ProcesosRecibidos: 71,
			 ProcMigradosInfoProcesal: 71,
			 ProcMigradosInfoDocumental: 25,
			 PorcEfectividadProcesal: 100,
			 PorcEfectividadDocumental: 35.2
			}
		,
			{id: 20,
			Seccional: "",
			 Despacho: "JUZGADO PRIMERO LABORAL DEL CIRCUITO DE MANIZALES",
			 ProcesosRecibidos: 680,
			 ProcMigradosInfoProcesal: 671,
			 ProcMigradosInfoDocumental: 587,
			 PorcEfectividadProcesal: 98.7,
			 PorcEfectividadDocumental: 86.3
			}
		,
			{id: 21,
			Seccional: "",
			 Despacho: "JUZGADO SEGUNDO LABORAL DEL CIRCUITO DE MANIZALES",
			 ProcesosRecibidos: 816,
			 ProcMigradosInfoProcesal: 809,
			 ProcMigradosInfoDocumental: 711,
			 PorcEfectividadProcesal: 99.1,
			 PorcEfectividadDocumental: 87.1
			}
		,
			{id: 22,
			Seccional: "",
			 Despacho: "JUZGADO TERCERO LABORAL DEL CIRCUITO DE MANIZALES",
			 ProcesosRecibidos: 823,
			 ProcMigradosInfoProcesal: 799,
			 ProcMigradosInfoDocumental: 682,
			 PorcEfectividadProcesal: 97.1,
			 PorcEfectividadDocumental: 82.9
			}
		,
			{id: 23,
			Seccional: "",
			 Despacho: "JUZGADO CUARTO LABORAL DEL CIRCUITO DE MANIZALES",
			 ProcesosRecibidos: 709,
			 ProcMigradosInfoProcesal: 705,
			 ProcMigradosInfoDocumental: 287,
			 PorcEfectividadProcesal: 99.4,
			 PorcEfectividadDocumental: 40.5
			}
		,
			{id: 24,
			Seccional: "",
			 Despacho: "JUZGADO PRIMERO DE PEQUENAS CAUSAS DE MANIZALES",
			 ProcesosRecibidos: 465,
			 ProcMigradosInfoProcesal: 460,
			 ProcMigradosInfoDocumental: 346,
			 PorcEfectividadProcesal: 98.9,
			 PorcEfectividadDocumental: 74.4
			}
		,
			{id: 25,
			Seccional: "",
			 Despacho: "JUZGADO SEGUNDO DE PEQUENAS CAUSAS DE MANIZALES",
			 ProcesosRecibidos: 391,
			 ProcMigradosInfoProcesal: 360,
			 ProcMigradosInfoDocumental: 73,
			 PorcEfectividadProcesal: 92.1,
			 PorcEfectividadDocumental: 18.7
			}
		,
			{id: 26,
			Seccional: "PEREIRA",
			 Despacho: "DESPACHO PRIMERO TRIBUNAL SUPERIOR DE PEREIRA",
			 ProcesosRecibidos: 147,
			 ProcMigradosInfoProcesal: 141,
			 ProcMigradosInfoDocumental: 71,
			 PorcEfectividadProcesal: 95.9,
			 PorcEfectividadDocumental: 48.3
			}
		,
			{id: 27,
			Seccional: "",
			 Despacho: "DESPACHO SEGUNDO TRIBUNAL SUPERIOR DE PEREIRA",
			 ProcesosRecibidos: 59,
			 ProcMigradosInfoProcesal: 57,
			 ProcMigradosInfoDocumental: 38,
			 PorcEfectividadProcesal: 96.6,
			 PorcEfectividadDocumental: 64.4
			}
		,
			{id: 28,
			Seccional: "",
			 Despacho: "DESPACHO TERCERO TRIBUNAL SUPERIOR DE PEREIRA",
			 ProcesosRecibidos: 231,
			 ProcMigradosInfoProcesal: 228,
			 ProcMigradosInfoDocumental: 102,
			 PorcEfectividadProcesal: 98.7,
			 PorcEfectividadDocumental: 44.2
			}
		,
			{id: 29,
			Seccional: "",
			 Despacho: "DESPACHO CUARTO TRIBUNAL SUPERIOR DE PEREIRA",
			 ProcesosRecibidos: 90,
			 ProcMigradosInfoProcesal: 90,
			 ProcMigradosInfoDocumental: 14,
			 PorcEfectividadProcesal: 100,
			 PorcEfectividadDocumental: 15.6
			}
		,
			{id: 30,
			Seccional: "",
			 Despacho: "JUZGADO PRIMERO LABORAL DEL CIRCUITO DE PEREIRA",
			 ProcesosRecibidos: 945,
			 ProcMigradosInfoProcesal: 940,
			 ProcMigradosInfoDocumental: 848,
			 PorcEfectividadProcesal: 99.5,
			 PorcEfectividadDocumental: 89.7
			}
		,
			{id: 31,
			Seccional: "",
			 Despacho: "JUZGADO SEGUNDO LABORAL DEL CIRCUITO DE PEREIRA",
			 ProcesosRecibidos: 773,
			 ProcMigradosInfoProcesal: 725,
			 ProcMigradosInfoDocumental: 663,
			 PorcEfectividadProcesal: 93.8,
			 PorcEfectividadDocumental: 85.8
			}
		,
			{id: 32,
			Seccional: "",
			 Despacho: "JUZGADO TERCERO LABORAL DEL CIRCUITO DE PEREIRA",
			 ProcesosRecibidos: 568,
			 ProcMigradosInfoProcesal: 554,
			 ProcMigradosInfoDocumental: 209,
			 PorcEfectividadProcesal: 97.5,
			 PorcEfectividadDocumental: 36.8
			}
		,
			{id: 33,
			Seccional: "",
			 Despacho: "JUZGADO CUARTO LABORAL DEL CIRCUITO DE PEREIRA",
			 ProcesosRecibidos: 519,
			 ProcMigradosInfoProcesal: 508,
			 ProcMigradosInfoDocumental: 407,
			 PorcEfectividadProcesal: 97.9,
			 PorcEfectividadDocumental: 78.4
			}
		,
			{id: 34,
			Seccional: "",
			 Despacho: "JUZGADO QUINTO LABORAL DEL CIRCUITO DE PEREIRA",
			 ProcesosRecibidos: 918,
			 ProcMigradosInfoProcesal: 899,
			 ProcMigradosInfoDocumental: 715,
			 PorcEfectividadProcesal: 97.9,
			 PorcEfectividadDocumental: 77.9
			}
		,
			{id: 35,
			Seccional: "",
			 Despacho: "JUZGADO PRIMERO DE PEQUENAS CAUSAS",
			 ProcesosRecibidos: 444,
			 ProcMigradosInfoProcesal: 220,
			 ProcMigradosInfoDocumental: 149,
			 PorcEfectividadProcesal: 49.5,
			 PorcEfectividadDocumental: 33.6
			}
		,
			{id: 36,
			Seccional: "",
			 Despacho: "JUZGADO SEGUNDO DE PEQUENAS CAUSAS",
			 ProcesosRecibidos: 261,
			 ProcMigradosInfoProcesal: 193,
			 ProcMigradosInfoDocumental: 164,
			 PorcEfectividadProcesal: 73.9,
			 PorcEfectividadDocumental: 62.8
			}
		,
			{id: 37,
			Seccional: "SINCELEJO",
			 Despacho: "DESPACHO 001 DE LA SALA CIVIL FAMILIA LABORAL DEL TRIBUNAL SUPERIOR DE SINCELEJO",
			 ProcesosRecibidos: 352,
			 ProcMigradosInfoProcesal: 248,
			 ProcMigradosInfoDocumental: 58,
			 PorcEfectividadProcesal: 70.5,
			 PorcEfectividadDocumental: 16.5
			}
		,
			{id: 38,
			Seccional: "",
			 Despacho: "DESPACHO 002 DE LA SALA CIVIL FAMILIA LABORAL DEL TRIBUNAL SUPERIOR DE SINCELEJO",
			 ProcesosRecibidos: 375,
			 ProcMigradosInfoProcesal: 285,
			 ProcMigradosInfoDocumental: 117,
			 PorcEfectividadProcesal: 76,
			 PorcEfectividadDocumental: 31.2
			}
		,
			{id: 39,
			Seccional: "",
			 Despacho: "DESPACHO 004 DE LA SALA CIVIL FAMILIA LABORAL DEL TRIBUNAL SUPERIOR DE SINCELEJO",
			 ProcesosRecibidos: 445,
			 ProcMigradosInfoProcesal: 361,
			 ProcMigradosInfoDocumental: 146,
			 PorcEfectividadProcesal: 81.1,
			 PorcEfectividadDocumental: 32.8
			}
		,
			{id: 40,
			Seccional: "",
			 Despacho: "JUZGADO 001 LABORAL DEL CIRCUITO DE SINCELEJO",
			 ProcesosRecibidos: 822,
			 ProcMigradosInfoProcesal: 673,
			 ProcMigradosInfoDocumental: 358,
			 PorcEfectividadProcesal: 81.9,
			 PorcEfectividadDocumental: 43.6
			}
		,
			{id: 41,
			Seccional: "",
			 Despacho: "JUZGADO 002 LABORAL DEL CIRCUITO DE SINCELEJO",
			 ProcesosRecibidos: 1656,
			 ProcMigradosInfoProcesal: 1292,
			 ProcMigradosInfoDocumental: 117,
			 PorcEfectividadProcesal: 78,
			 PorcEfectividadDocumental: 7.1
			}
		,
			{id: 42,
			Seccional: "",
			 Despacho: "JUZGADO 003 LABORAL DEL CIRCUITO DE SINCELEJO",
			 ProcesosRecibidos: 1438,
			 ProcMigradosInfoProcesal: 1091,
			 ProcMigradosInfoDocumental: 306,
			 PorcEfectividadProcesal: 75.9,
			 PorcEfectividadDocumental: 21.3
			}
		,
			{id: 43,
			Seccional: "",
			 Despacho: "JUZGADO 001 MUNICIPAL DE PEQUENAS CAUSAS LABORALES DE SINCELEJO",
			 ProcesosRecibidos: 688,
			 ProcMigradosInfoProcesal: 540,
			 ProcMigradosInfoDocumental: 36,
			 PorcEfectividadProcesal: 78.5,
			 PorcEfectividadDocumental: 5.2
			}
		
	]
	

	var grid_selector = "#grid-table"
	var pager_selector = "#grid-pager"
	var grid_box = '#gbox_grid-table'


	// resize to fit page size
	var parent_column = $(grid_selector).closest('.col-12')
	$(window)
	.on('resize.jqGrid', function () {
		$(grid_selector).jqGrid('setGridWidth', parent_column.width())
	})

	//resize on sidebar collapse/expand
	$('.sidebar')
	.on('expand.ace.sidebar' , function() {
		$(grid_box).hide()
	})
	.on('collapsed.ace.sidebar expanded.ace.sidebar' , function() {
		$(grid_selector).jqGrid('setGridWidth', parent_column.width())
		$(grid_box).show()
	})


	// update zIndex for jqGrid modals, to appear above other elements
	$.extend($.jgrid.jqModal, {zIndex: 600})


	// set custom classes
 	$.jgrid.guiStyles.bootstrap4ace = {
		baseGuiStyle: "bootstrap4",

		gBox: "",
		gView: "",

		hDiv: "border-y-1 brc-grey-l2 mt-n1px bgc-secondary-l3",
		hTable: "text-uppercase text-50 text-dark-tp3",
		colHeaders: "pl-2 pr-1 text-left",


		gridTitle: "bgc-green-d1 text-white text-75 p-25",
		grid: "table table-hover table-bordered text-dark-m1 text-70 border-0 brc-grey-l2 table-striped",
		titleButton: "btn btn-green border-0 mr-2 px-2 w-auto radius-1",

		gridRow: "bgc-h-success-l3",
		
		actionsButton: "action-btn mx-1 px-2px float-none border-0",	

		states: {
			select: "bgc-success-l2 bgc-h-success-l1",
			th: "bgc-yellow-l1 text-blue-d2",
			//hoverTh: "bgc-default-l2 text-default-d3",
			hoverTh: "bgc-yellow-l1 text-dark-m3",
			
			error: "alert bgc-danger-l3",
			active: "active",
			//textOfClickable: ""
		},


		//dialogs
		overlay: "modal-backdrop",
		
		

		navButton: "action-btn border-0 text-110 mx-1",
		
		subgrid: {
			button: "",//don't remove
			row: "bgc-secondary-l4 p-0",
		},

	}

	// use the following icons
	var _pageBtn = "btn w-4 h-4 px-0 mx-2px btn-outline-lightgrey btn-h-outline-primary btn-a-outline-primary radius-round bgc-white"
	$.jgrid.icons.icons4ace = {
		baseIconSet: "fontAwesome5",
		common: "fas",

		gridMinimize: {
			visible: "fa-chevron-up",
			hidden: "fa-chevron-down"
		},

		sort: {
			common: "far",
			asc: "fa-caret-up",
			desc: "fa-caret-down"
		},

	}


	// initiate plugin
	$(grid_selector).jqGrid({
		//direction: "rtl",

		iconSet: "icons4ace",
		guiStyle: "bootstrap4ace",
		 
		multiselectWidth: 36,		
		
		data: grid_data,
		datatype: "local",
		height: 520,//optional

		sortable: true,

		colNames:['Seccional','Nombre Juzgado','Proc. recibidos','Proc. Migrados Info Procesal','Proc. Migrados Info Documental','% Efectiv procesal','% Efectiv documental'],
		colModel:[
			{
				resizable: false,
				name: 'Seccional',
				index: 'id',
				sorttype:"text",
				sortable: false,
				width:110,
				classes: "font-weight-bold"
			},
			{
				resizable: false,
				name: 'Despacho',
				index: 'id',
				sorttype:"text",
				sortable: false,
				width: 700,
				//unformat: pickDate
			},
			{resizable: false,name:'ProcesosRecibidos',index:'id', width:150,sorttype:"float", sortable: true, classes: "text-center"},
			{resizable: false,name:'ProcMigradosInfoProcesal',index:'id', width:200,sorttype:"float", classes: "text-center"},
			{resizable: false,name:'ProcMigradosInfoDocumental',index:'id', width:220,sorttype:"float", classes: "text-center"},
			{resizable: false,name:'PorcEfectividadProcesal',index:'id', width:150,sorttype:"float", classes: "text-center"},
			{resizable: false,name:'PorcEfectividadDocumental',index:'id', width:150,sorttype:"float", classes: "text-center"}
		],


		altRows: false,
		altclass: 'bgc-secondary-l5',

		viewrecords : true,
		rowNum: 3000,
		rowList:[1,2,3,4,5,6],
		
		//toppager: true,
		
		multiselect: false,		
		multiboxonly: false,
		//multikey: "ctrlKey",

		loadComplete : function() {
			var table = this;
			setTimeout(function() {
				$(window).triggerHandler('resize.jqGrid');//trigger window resize to make the grid get the correct size
				enableTooltips(table);
			}, 0);
		},

		//caption: "Estado de migraci&oacute;n por despacho",
		caption: "<h6 class='card-title text-white'><i class='fa fa-table mr-2px'></i>Estado de migraci&oacute;n por despacho</h6>",

		//autowidth: true, shrinkToFit: true,
		autowidth: true,
		shrinkToFit: $(window).width() > 600,
		forceFit: true,

		grouping: false,
		groupingView : {
			groupField : ['name'],
			groupDataSorted : false,
			plusicon : 'fa fa-chevron-down px-2 w-auto text-primary-m3 bgc-h-primary-l2 py-1 mx-1 radius-1',
			minusicon : 'fa fa-chevron-up px-2 w-auto text-primary-m3 bgc-h-primary-l2 py-1 mx-1 radius-1'
		},


		
	})
	
	// enable tooltips
	function enableTooltips(table) {
		$('.navtable .ui-pg-button').tooltip({container:'body', trigger: 'hover'})
		$(table).find('.ui-pg-div').tooltip({container:'body', trigger: 'hover'})
	}

})