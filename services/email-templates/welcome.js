const welcomeTemplate = ({ name, domain }) => {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Template</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@300&display=swap" rel="stylesheet"><!--<![endif]-->
  <style type="text/css">
.rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
  }
  .rollover:hover .rollover-second {
  max-height:none!important;
  display:block!important;
  }
  .rollover span {
  font-size:0px;
  }
  u + .body img ~ div div {
  display:none;
  }
  #outlook a {
  padding:0;
  }
  span.MsoHyperlink,
span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
  }
  a.es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
  }
  .es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
  }
  .es-button-border:hover > a.es-button {
  color:#ffffff!important;
  }
@media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } .es-m-p20b { padding-bottom:20px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head>
 <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#BDD7D6"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#BDD7D6"></v:fill>
			</v:background>
		<![endif]-->
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#BDD7D6">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
             <tr>
              <td align="left" background="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/union_zlc.png" style="Margin:0;padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:20px;background-image:url(https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/union_zlc.png);background-repeat:no-repeat;background-position:center top;border-radius:20px 20px 0px 0px;background-color:#eff2dd" bgcolor="#EFF2DD">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:21px;letter-spacing:0;color:#516365;font-size:14px"><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#516365;font-size:14px" href="https://viewstripo.email">View Online</a></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" bgcolor="#EFF2DD" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px;background-color:#eff2dd">
               <table cellspacing="0" cellpadding="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:25px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:14px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/group_15.png" alt="Logo" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="100" title="Logo"></a></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:5px;Margin:0;font-size:0">
                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td style="padding:0;Margin:0;border-bottom:1px solid #7f9d9d;background:unset;height:1px;width:100%;margin:0px"></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="links">
                          <td align="center" valign="top" width="33%" id="esd-menu-id-0" style="Margin:0;border:0;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Spartan, sans-serif;display:block;color:#516365;font-size:14px">Home</a></td>
                          <td align="center" valign="top" width="33%" id="esd-menu-id-1" style="Margin:0;border:0;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Spartan, sans-serif;display:block;color:#516365;font-size:14px">Blog</a></td>
                          <td align="center" valign="top" width="33%" id="esd-menu-id-2" style="Margin:0;border:0;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Spartan, sans-serif;display:block;color:#516365;font-size:14px">Price</a></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:5px;Margin:0;font-size:0">
                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td style="padding:0;Margin:0;border-bottom:1px solid #7f9d9d;background:unset;height:1px;width:100%;margin:0px"></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#EFF2DD" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFF2DD;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:18px"><img class="adapt-img" src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/group_14_sYp.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="600"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:40px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-bottom:20px"><h1 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:34px;font-style:normal;font-weight:bold;line-height:41px;color:#516365">Welcome aboard!</h1><h1 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:34px;font-style:normal;font-weight:bold;line-height:41px;color:#516365">Let's get you started</h1></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:25px;font-size:0px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/rectangle_5385.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="50"></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-bottom:30px"><h3 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#516365">Dear Lizbeth,</h3><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:27px;letter-spacing:0;color:#516365;font-size:18px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:27px;letter-spacing:0;color:#516365;font-size:18px">It's fantastic to have you with us! Welcome to the BrightPeak family. We're thrilled that you've chosen us to be part of your journey.</p></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:46px; v-text-anchor:middle; width:231px" arcsize="26%" stroke="f"  fillcolor="#ee6b61">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ffffff; font-family:Spartan, sans-serif; font-size:16px; font-weight:700; line-height:16px;  mso-text-raise:1px'>GET STARTED ></center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#2CB543;background:#EE6B61;border-width:0px;display:inline-block;border-radius:12px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;padding:15px 30px 10px 30px;display:inline-block;background:#EE6B61;border-radius:12px;font-family:Spartan, sans-serif;font-weight:bold;font-style:normal;line-height:22px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #EE6B61">GET STARTED &gt;</a></span><!--<![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#7F9D9D" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#7f9d9d;width:600px" role="none">
             <tr>
              <td align="left" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/subtract.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="600"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-bottom:20px;padding-top:20px"><h1 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:34px;font-style:normal;font-weight:bold;line-height:41px;color:#eff2dd">Few resources</h1><h1 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:34px;font-style:normal;font-weight:bold;line-height:41px;color:#eff2dd">that you might find handy:</h1></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:260px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:260px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:18px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/architectureandciy.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="50" class="b_image"></a></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#eff2dd"><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#eff2dd;font-size:20px" href="https://viewstripo.email" class="b_title">Started Guide &gt; </a></h3></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:24px;letter-spacing:0;color:#ffffff;font-size:16px" class="b_description">This guide walks you through the basics of using our software.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:40px"></td><td style="width:260px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:260px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:18px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/united.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="50" class="b_image"></a></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#eff2dd"><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#eff2dd;font-size:20px" href="https://viewstripo.email" class="b_title">Community Forums &gt;</a></h3></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:24px;letter-spacing:0;color:#ffffff;font-size:16px" class="b_description">Connect with other users, share ideas, and learn from their experiences.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
             <tr>
              <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:40px;padding-top:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:260px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:260px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:18px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/chat.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="50"></a></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#eff2dd"><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#eff2dd;font-size:20px" href="https://viewstripo.email">Support Centre&nbsp;&gt;</a></h3></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:24px;letter-spacing:0;color:#ffffff;font-size:16px">Find the answers to commonly asked questions here.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:40px"></td><td style="width:260px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:260px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:18px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/play_1.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="50" class="b_image"></a></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px"><h3 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#eff2dd"><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#eff2dd;font-size:20px" href="https://viewstripo.email" class="b_title">Tutorial Videos &gt;</a></h3></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:24px;letter-spacing:0;color:#ffffff;font-size:16px" class="b_description">These videos provide a visual guide to using our services.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/subtract_xHj.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="600"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFF2DD;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:20px"><h1 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:34px;font-style:normal;font-weight:bold;line-height:41px;color:#516365">Let's start this journey together!</h1></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:25px;font-size:0px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/rectangle_5385.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="50"></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:27px;letter-spacing:0;color:#516365;font-size:18px">Best Wishes,</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:27px;letter-spacing:0;color:#516365;font-size:18px"><strong>BrightPeak!</strong></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:30px;padding-top:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="right" class="es-m-txt-c" style="padding:0;Margin:0"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:46px; v-text-anchor:middle; width:247px" arcsize="26%" strokecolor="#ee6b61" strokeweight="2px" fillcolor="#eff2dd">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ee6b61; font-family:Spartan, sans-serif; font-size:16px; font-weight:700; line-height:16px;  mso-text-raise:1px'>WATCH DEMO ></center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#ee6b61;background:#eff2dd;border-width:2px;display:inline-block;border-radius:12px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-8214" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#ee6b61;font-size:18px;padding:15px 30px 10px 30px;display:inline-block;background:#eff2dd;border-radius:12px;font-family:Spartan, sans-serif;font-weight:bold;font-style:normal;line-height:22px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #EFF2DD">WATCH DEMO &gt;</a></span><!--<![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:46px; v-text-anchor:middle; width:238px" arcsize="26%" strokecolor="#ee6b61" strokeweight="2px" fillcolor="#ee6b61">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ffffff; font-family:Spartan, sans-serif; font-size:16px; font-weight:700; line-height:16px;  mso-text-raise:1px'>SIGN IN ></center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#ee6b61;background:#ee6b61;border-width:2px;display:inline-block;border-radius:12px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1684935065829" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;padding:15px 60px 10px;display:inline-block;background:#EE6B61;border-radius:12px;font-family:Spartan, sans-serif;font-weight:bold;font-style:normal;line-height:22px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #EE6B61">SIGN IN &gt;</a></span><!--<![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
             <tr>
              <td align="left" bgcolor="#516365" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:40px;background-color:#516365"><!--[if mso]><table dir="ltr" cellpadding="0" cellspacing="0"><tr><td><table dir="rtl" style="width:560px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:339px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:339px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0"><h1 style="Margin:0;font-family:Spartan, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:34px;font-style:normal;font-weight:bold;line-height:41px;color:#eff2dd">The next step</h1></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:20px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:27px;letter-spacing:0;color:#ffffff;font-size:18px">...in your journey with us is to download our top-rated app. It's packed full of features that will make using our software a breeze.</p></td>
                     </tr>
                     <tr>
                      <td style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="images">
                          <td align="LEFT" valign="top" width="50%" id="esd-menu-id-0" style="padding:0;Margin:0;border:0;padding-top:10px;padding-bottom:10px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Spartan, sans-serif;display:block;color:#516365;font-size:18px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/group_dS2.png" alt="App store" title="App store" height="37" style="display:inline !important;font-size:18px;border:0;outline:none;text-decoration:none;vertical-align:middle"></a></td>
                          <td align="LEFT" valign="top" width="50%" id="esd-menu-id-1" style="padding:0;Margin:0;border:0;padding-top:10px;padding-bottom:10px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Spartan, sans-serif;display:block;color:#516365;font-size:18px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/group1.png" alt="Google play" title="Google play" height="37" style="display:inline !important;font-size:18px;border:0;outline:none;text-decoration:none;vertical-align:middle"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td dir="ltr" style="width:20px"></td><td dir="ltr" style="width:201px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:201px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:18px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_55133f7da1d530766fabffa3c07ab1852570caf3acae85e9fef2735054562cd4/images/group_2iz.png" alt="" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="201"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#3c2c4c" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFF2DD;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:40px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="links">
                          <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Spartan, sans-serif;display:block;color:#516365;font-size:14px">About us</a></td>
                          <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Spartan, sans-serif;display:block;color:#516365;font-size:14px">News</a></td>
                          <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Spartan, sans-serif;display:block;color:#516365;font-size:14px">Career</a></td>
                          <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Spartan, sans-serif;display:block;color:#516365;font-size:14px">The shops</a></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:20px;padding-top:20px;font-size:0">
                       <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:14px"><img title="Facebook" src="https://fhnmftt.stripocdn.email/content/assets/img/social-icons/logo-colored-bordered/facebook-logo-colored-bordered.png" alt="Fb" width="24" height="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:14px"><img title="X.com" src="https://fhnmftt.stripocdn.email/content/assets/img/social-icons/logo-colored-bordered/x-logo-colored-bordered.png" alt="X" width="24" height="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:14px"><img title="Instagram" src="https://fhnmftt.stripocdn.email/content/assets/img/social-icons/logo-colored-bordered/instagram-logo-colored-bordered.png" alt="Inst" width="24" height="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
                          <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;color:#516365;font-size:14px"><img title="Youtube" src="https://fhnmftt.stripocdn.email/content/assets/img/social-icons/logo-colored-bordered/youtube-logo-colored-bordered.png" alt="Yt" width="24" height="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Spartan, sans-serif;line-height:21px;letter-spacing:0;color:#516365;font-size:14px">You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><strong><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;color:#516365;font-size:14px">Privacy police</a> | <a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;color:#516365;font-size:14px" href="">Unsubscribe</a></strong></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
             <tr>
              <td align="left" bgcolor="#EFF2DD" style="padding:20px;Margin:0;background-color:#eff2dd;border-radius:0px 0px 20px 20px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" class="es-infoblock made_with" style="padding:0;Margin:0;font-size:0"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=saas_11&utm_content=lets_get_you_started" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img src="https://fhnmftt.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt="" width="125" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
    `;
};

module.exports = welcomeTemplate;