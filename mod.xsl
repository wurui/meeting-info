<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.meeting-info">
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-meeting-info" ox-mod="meeting-info">
        	<xsl:variable name="login_uid" select="login/uid"/>
        	<xsl:variable name="detail" select="data/user-event/i[1]"/>
        	<xsl:variable name="apply" select="$detail/user-apply/i[1]"/>
        	

        	<xsl:if test="count($detail) = 0">
        		<div class="nodata">无数据</div>
        	</xsl:if>

        	<xsl:for-each select="$detail">
	        	<section>
		        	
		            <table>
		            	<tbody>
		            		<tr>
		            			<th>主题</th>
		            			<td>
		            				<xsl:value-of select="title"/>
		            			</td>
		            		</tr>
		            		<tr>
		            			<th>时间</th>
		            			<td>
		            				<xsl:value-of select="starttime/y"/>-<xsl:value-of select="starttime/M"/>-<xsl:value-of select="starttime/d"/>&#160;<xsl:value-of select="starttime/H"/>:<xsl:value-of select="format-number(starttime/m,'00')"/>
		            			</td>
		            		</tr>
		            		<tr>
		            			<th>地点</th>
		            			<td>
		            				<xsl:value-of select="spot"/>
		            			</td>
		            		</tr>
		            		<tr>
		            			<th>人数</th>
		            			<td>
		            				<xsl:value-of select="scale"/>
		            			</td>
		            		</tr>
		            		<xsl:if test="organizer and organizer != ''">
			            		<tr>
			            			<th>组织者</th>
			            			<td>
			            				<xsl:value-of select="organizer"/>
			            			</td>
			            		</tr>
			            	</xsl:if>
		            		
		            	</tbody>
		            </table>
			        
	            </section>
	            <section>
		            <h4 class="section-title">活动内容</h4>
		            <div>
		            	<xsl:value-of select="content" disable-output-escaping="yes" />
		            </div>
	            </section>
	            <section>
		            <h4 class="section-title">注意事项</h4>
		            <div>
		            	<xsl:value-of select="notice" disable-output-escaping="yes" />
		            </div>
		        </section>
		        <xsl:choose>
				        	
				        	<xsl:when test="$apply">
				        		<section class="center">
						        	<button class="bt-cancel J_cancel" data-id="{$apply/_id}">取消参加</button>
						        </section>
				        	</xsl:when>
				        	<xsl:otherwise>
				        		<section class="center">
						        	<button class="bt-apply J_apply" data-title="{title}"  data-owner="{owner}" data-id="{_id}">参加活动</button>
						        </section>
				        	</xsl:otherwise>
				        </xsl:choose><!--
		        <xsl:choose>
		        	<xsl:when test="uid = $login_uid">
		        		<section class="center">
				        	<button class="bt-del J_del" data-id="{_id}">删除活动</button>
				        </section>
		        	</xsl:when>
		        	<xsl:when test="$login_uid !=''">
		        		<xsl:choose>
				        	
				        	<xsl:when test="$apply">
				        		<section class="center">
						        	<button class="bt-cancel J_cancel" data-id="{$apply/_id}">取消参加</button>
						        </section>
				        	</xsl:when>
				        	<xsl:otherwise>
				        		<section class="center">
						        	<button class="bt-apply J_apply" data-title="{title}" data-id="{_id}">参加活动</button>
						        </section>
				        	</xsl:otherwise>
				        </xsl:choose>
		        		
		        	</xsl:when>
		        	<xsl:otherwise>
		        		
		        		
		        	</xsl:otherwise>
		        </xsl:choose>-->
		        
	        </xsl:for-each>
	        
        </div>
    </xsl:template>
</xsl:stylesheet>
