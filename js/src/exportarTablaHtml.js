function htmlTableToExcel(type,codigoCategoria,nombreTabla){
 var data = document.getElementById(nombreTabla);
 const ws = XLSX.utils.aoa_to_sheet([[nombreTabla]]);
 XLSX.utils.sheet_add_dom(ws, data, {raw: true});
 const wb = XLSX.utils.book_new();
 XLSX.utils.book_append_sheet(wb, ws, nombreTabla);
 XLSX.writeFile(wb, 'DatosExcel_' + codigoCategoria + "_" + nombreTabla + '.' + type);
}