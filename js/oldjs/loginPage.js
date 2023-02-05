$(document).ready( function()
{
              $("#navigation li a").click(
                    function()
                    {
                        var lnk = $(this).html();
                        //alert($(this).html());
                        
                        if (lnk == "Home")
                        {
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/Home";
                        }
                        else if (lnk == "About" || lnk == "About Us")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/About";                            
                        else if (lnk == "TeachMe Tool")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/TeachMeTool";                            
                        else if (lnk == "Login Mobile")
                            window.location = "http://www.teachkids.us/teachmedemo/Home.aspx/Login";                            
                        else if (lnk == "Contact" || lnk == "Contact Us")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/ContactUs";                            
                        else if (lnk == "Consulting Services")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/ConsultingServices";                            
                         
                        else if (lnk == "Board of Advisors")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/BoardOfAdvisors";                               
                        else if (lnk == "Partners")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/Partners";                               
                        else if (lnk == "News")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/News";                               
                        else if (lnk == "Volume Licensing")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/VolumeLicensing";                               
                        else if (lnk == "HIPAA Information")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/HIPAAInformation";                               
                        else if (lnk == "Testimonials")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/Testimonials";                               
                        else if (lnk == "Terms and Conditions")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/TermsandConditions";                               
                        else if (lnk == "Privacy")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/Privacy";                               
                        else if (lnk == "FAQ")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/FAQ";                               
                        else if (lnk == "Site Map")
                            window.location = "http://www.teachkids.us/Registration/Home.aspx/SiteMap";                               

                        //$("#formName").val($(this).html());
                    }
              )      
})	
