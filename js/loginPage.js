$(document).ready( function()
{
              $("#navigation li a").click(
                    function()
                    {
                        var lnk = $(this).html();
                        //alert($(this).html());
                        
                        if (lnk == "Home")
                        {
                            window.location = "https://www.autism311.com/Registration/Home.aspx/Home";
                        }
                        else if (lnk == "About" || lnk == "About Us")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/About";                            
                        else if (lnk == "TeachMe Tool")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/TeachMeTool";                            
                        else if (lnk == "Login Mobile")
                            window.location = "https://www.autism311.com/teachmedemo/Home.aspx/Login";                            
                        else if (lnk == "Contact" || lnk == "Contact Us")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/ContactUs";                            
                        else if (lnk == "Consulting Services")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/ConsultingServices";                            
                         
                        else if (lnk == "Board of Advisors")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/BoardOfAdvisors";                               
                        else if (lnk == "Partners")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/Partners";                               
                        else if (lnk == "News")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/News";                               
                        else if (lnk == "Volume Licensing")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/VolumeLicensing";                               
                        else if (lnk == "HIPAA Information")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/HIPAAInformation";                               
                        else if (lnk == "Testimonials")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/Testimonials";                               
                        else if (lnk == "Terms and Conditions")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/TermsandConditions";                               
                        else if (lnk == "Privacy")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/Privacy";                               
                        else if (lnk == "FAQ")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/FAQ";                               
                        else if (lnk == "Site Map")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/SiteMap";                               

                        //$("#formName").val($(this).html());
                    }
              )   

	$(".footer-nav li ul a").click(
		function()
		{
	
                        var lnk = $(this).html();
                        alert($(this).html());

                        if (lnk == "Home")
                        {
                            window.location = "https://www.autism311.com/Registration/Home.aspx/Home";
                        }
                        else if (lnk == "About" || lnk == "About Us")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/About";                            
                        else if (lnk == "TeachMe Tool")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/TeachMeTool";                            
                        else if (lnk == "Login Mobile")
                            window.location = "https://www.autism311.com/teachmedemo/Home.aspx/Login";                            
                        else if (lnk == "Contact" || lnk == "Contact Us")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/ContactUs";                            
                        else if (lnk == "Consulting Services")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/ConsultingServices";                            
                         
                        else if (lnk == "Board of Advisors")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/BoardOfAdvisors";                               
                        else if (lnk == "Partners")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/Partners";                               
                        else if (lnk == "News")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/News";                               
                        else if (lnk == "Volume Licensing")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/VolumeLicensing";                               
                        else if (lnk == "HIPAA Information")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/HIPAAInformation";                               
                        else if (lnk == "Testimonials")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/Testimonials";                               
                        else if (lnk == "Terms and Conditions")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/TermsandConditions";                               
                        else if (lnk == "Privacy")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/Privacy";                               
                        else if (lnk == "FAQ")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/FAQ";                               
                        else if (lnk == "Site Map")
                            window.location = "https://www.autism311.com/Registration/Home.aspx/SiteMap";                               

                        //$("#formName").val($(this).html());
	}
	)   
})	
