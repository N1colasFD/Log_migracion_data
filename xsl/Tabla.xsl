<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
	<xsl:output method="text" encoding="ISO-8859-1" indent="yes"/>
	<xsl:param name="idTabla"/>
	<xsl:param name="codigoCategoria"/>
	<xsl:template match="/">
	<div class="container p-0">
		<div class="container p-0">
			<div class="card-toolbar no-border">                        
				<div role="button" class="d-style btn btn-lighter-green btn-tp btn-h-brc-tp my-1 text-150 radius-2px border-2 px-2 mr-2">
				   <xsl:element name="i">
				     <xsl:attribute name="class">fa fa-save w-3</xsl:attribute>
					 <xsl:attribute name="onClick">htmlTableToExcel('xlsx','<xsl:value-of select="$codigoCategoria"/>','<xsl:value-of select="$idTabla"/>')</xsl:attribute>
				   </xsl:element>
				</div>
			</div>
		</div>
		<div class="card-body p-0">
			<div class="table-responsive-md">
		    <xsl:element name="table">
			  <xsl:attribute name="class">table table-bordered border-0	table-striped-secondary text-dark-m1 mb-0 text-100</xsl:attribute>
			  <xsl:attribute name="id"><xsl:value-of select="$idTabla"/></xsl:attribute>
				  <thead>
						<tr class="bgc-green text-white brc-black-tp10">
							<xsl:for-each select="/table/row[1]/child::*">
							   <th><xsl:value-of select="name(.)"/></th>
							</xsl:for-each>
						</tr>
				  </thead>
				  <tbody>
						<xsl:for-each select="/table/row">
							<tr>
								<xsl:for-each select="./child::*">
								   <td><xsl:text disable-output-escaping="yes"><![CDATA[&nbsp;]]></xsl:text><xsl:value-of select="."/></td>
								</xsl:for-each>
							</tr>
						</xsl:for-each>
				  </tbody>
			</xsl:element>
			</div>
		</div>
		</div>
		<xsl:element name="script">
		  <xsl:text> </xsl:text>
		
		</xsl:element>
	</xsl:template>
</xsl:stylesheet>
