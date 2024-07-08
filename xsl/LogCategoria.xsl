<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0" xmlns:str="http://exslt.org/strings">
	<xsl:output method="html" encoding="ISO-8859-1" indent="yes"/>
	<xsl:include href="str.tokenize.xsl"/>
	<xsl:template match="/">
		<html>
			<head>
				<meta charset="ISO-8859-1"/>
				<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"/>
				<base href="../"/>
				<title>Log migración<xsl:value-of select="/data/row/nombreCategoria"/>
				</title>
				<link rel="stylesheet" type="text/css" href="./node_modules/bootstrap/dist/css/bootstrap.css"/>
				<link rel="stylesheet" type="text/css" href="./node_modules/@fortawesome/fontawesome-free/css/fontawesome.css"/>
				<link rel="stylesheet" type="text/css" href="./node_modules/@fortawesome/fontawesome-free/css/regular.css"/>
				<link rel="stylesheet" type="text/css" href="./node_modules/@fortawesome/fontawesome-free/css/brands.css"/>
				<link rel="stylesheet" type="text/css" href="./node_modules/@fortawesome/fontawesome-free/css/solid.css"/>
				<link rel="stylesheet" type="text/css" href="./node_modules/free-jqgrid/css/ui.jqgrid.css"/>
				<link rel="stylesheet" type="text/css" href="./node_modules/jqtree/jqtree.css"/>
				<link rel="stylesheet" type="text/css" href="./dist/css/ace-font.css"/>
				<link rel="stylesheet" type="text/css" href="./dist/css/ace.css"/>
				<link rel="icon" type="image/png" href="./assets/favicon.png"/>					
			</head>
			<body class="landing-page">
				<div class="body-container">
					<div class="page-content container container-plus">
						<div class="page-header border-0">
							<h5>
								<xsl:value-of select="/data/row/nombreCategoria"/>
								<span class="text-50">
									<xsl:text> (Informe de migración)</xsl:text>
								</span>
								<p>
									<span class="text-50">
										<xsl:text>
									A continuación, se muestra el detalle de la información recibida y la trazabilidad de migración para Positiva SGDA
						</xsl:text>
									</span>
								</p>
							</h5>
						</div>
						<div class="row">
							<div class="col-12 col-md-5 mt-3 mt-md-0">
								<div class="card bcard h-auto border-0">
									<div class="card-header bgc-green-d3">
										<h3 class="card-title text-130 text-white">
											<xsl:text>

									</xsl:text>
										</h3>
									</div>
									<div class="card-body bgc-white border-1 border-t-0 brc-success-m3">
										<div class="jqtree tree-dotted" id="id-jqtree-files">

								</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-7 mt-3 mt-md-0">
							<div class="container bcard bgc-transparent shadow-none">
								<ul class="nav nav-tabs radius-0 px-3 pt-3 border-b-3 brc-gray-d3" role="tablist">
									<xsl:for-each select="str:tokenize(/data/row/nombreTabs/text(), ',')">								
										<li class="nav-item mr-1px">
											<xsl:element name="a">												
												<xsl:attribute name="class">
													<xsl:if test="position() = 1">btn btn-light-lightgrey btn-h-light-green btn-h-text-black btn-a-green py-2 border-1 border-b-0 radius-b-0 radius-t-2 text-85 active</xsl:if><xsl:if test="position() > 1">btn btn-light-lightgrey btn-h-light-green btn-h-text-black btn-a-green py-2 border-1 border-b-0 radius-b-0 radius-t-2 text-85 </xsl:if>
												</xsl:attribute>
												<xsl:attribute name="id"><xsl:value-of select="str:replace(.,' ','')"/>-tab-btn</xsl:attribute>
												<xsl:attribute name="data-toggle">tab</xsl:attribute>  
												<xsl:attribute name="href">#<xsl:value-of select="str:replace(.,' ','')"/></xsl:attribute>
												<xsl:attribute name="role">tab</xsl:attribute>
												<xsl:attribute name="aria-controls"><xsl:value-of select="str:replace(.,' ','')"/></xsl:attribute> 												
												<xsl:attribute name="aria-selected">true</xsl:attribute>
												<xsl:value-of select="."/>
											</xsl:element>
												
										</li>
									</xsl:for-each>
								</ul>
								<div class="tab-content bgc-white p-35 border-1 brc-grey-l1 radius-2px">
									<xsl:for-each select="str:tokenize(/data/row/nombreTabs/text(), ',')">
										<xsl:element name="div">
											<xsl:attribute name="class">
													<xsl:if test="position() = 1">tab-pane fade text-95  show active</xsl:if><xsl:if test="position() > 1">tab-pane fade text-95</xsl:if>
												</xsl:attribute>
												<xsl:attribute name="id"><xsl:value-of select="str:replace(.,' ','')"/></xsl:attribute>
												<xsl:attribute name="role">tabpanel</xsl:attribute>  
												<xsl:attribute name="aria-labelledby"><xsl:value-of select="str:replace(.,' ','')"/>-tab-btn</xsl:attribute><xsl:text> </xsl:text> 												

												
										</xsl:element>
								
									</xsl:for-each>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- include common vendor scripts used in demo pages -->
				<xsl:element name="script">
					<xsl:attribute name="src">./node_modules/jquery/dist/jquery.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<xsl:element name="script">
					<xsl:attribute name="src">./node_modules/popper.js/dist/umd/popper.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<xsl:element name="script">
					<xsl:attribute name="src">./node_modules/bootstrap/dist/js/bootstrap.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<xsl:element name="script">
					<xsl:attribute name="src">./node_modules/free-jqgrid/js/jquery.jqgrid.src.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<xsl:element name="script">
					<xsl:attribute name="src">https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>

				<xsl:element name="script">
					<xsl:attribute name="src">./dist/js/ace.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<xsl:element name="script">
					<xsl:attribute name="src">./views/pages/table-bootstrap/@page-script.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<!-- include vendor scripts used in "Treeview" page. see "/views//pages/partials/treeview/@vendor-scripts.hbs" -->
				<xsl:element name="script">
					<xsl:attribute name="src">./snapshot/datos_<xsl:value-of select="/data/row/idSnaphot"/>.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<xsl:element name="script">
					<xsl:attribute name="src">./node_modules/jqtree/tree.jquery.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<!-- include ace.js -->
				<!-- "Treeview" page script to enable its demo functionality -->
				<xsl:element name="script">
					<xsl:attribute name="src">./views/pages/treeview/@page-script.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<xsl:element name="script">
					<xsl:attribute name="src">./js/src/exportarTablaHtml.js</xsl:attribute>
					<xsl:text> </xsl:text>
				</xsl:element>
				<xsl:variable name="idSnapshot" select="/data/row/idSnaphot"/>
				<xsl:for-each select="str:tokenize(/data/row/nombreTabs/text(), ',')">
					<xsl:element name="script">					
					   <xsl:attribute name="src">./resultado/detalle/<xsl:value-of select="$idSnapshot"/><xsl:value-of select="str:replace(.,' ','')"/>.js</xsl:attribute>
					   <xsl:text> </xsl:text>						
					</xsl:element>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
