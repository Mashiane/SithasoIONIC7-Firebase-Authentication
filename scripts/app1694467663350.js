var _banano_sithasoionicfirebaseauthentication=new banano_sithasoionicfirebaseauthentication();var _banano_sithasoionic7_modsithasoionic=new banano_sithasoionic7_modsithasoionic();var _banano_sithasoionicfirebaseauthentication_pgforgotpassword=new banano_sithasoionicfirebaseauthentication_pgforgotpassword();var _banano_sithasoionicfirebaseauthentication_pgindex=new banano_sithasoionicfirebaseauthentication_pgindex();var _banano_sithasoionicfirebaseauthentication_pgsignin=new banano_sithasoionicfirebaseauthentication_pgsignin();var _banano_sithasoionicfirebaseauthentication_pgsignup=new banano_sithasoionicfirebaseauthentication_pgsignup();var _banano_sithasoionicfirebaseauthentication_pgwelcome=new banano_sithasoionicfirebaseauthentication_pgwelcome();
/* App */
function banano_sithasoionicfirebaseauthentication_pgforgotpassword() {var _B;this._name="fbforgot";this._title="FireBase Forgot Password";this._icon="logo-ionic";this._app= new banano_sithasoionic7_ionicapp();this._pageheader= new banano_sithasoionic7_shionheader();this._pagetitle= new banano_sithasoionic7_shiontitle();this._pagetoolbar= new banano_sithasoionic7_shiontoolbar();this._pagecontent= new banano_sithasoionic7_shioncontent();this._pagefooter= new banano_sithasoionic7_shionfooter();this._pagetabs= new banano_sithasoionic7_shiontabs();this._pagetabbar= new banano_sithasoionic7_shiontabbar();this._pagemenubutton= new banano_sithasoionic7_shionmenubutton();this._pagebackbutton= new banano_sithasoionic7_shionbackbutton();this._pagestartbuttons= new banano_sithasoionic7_shionbuttons();this._pageendbuttons= new banano_sithasoionic7_shionbuttons();this._fpemail= new banano_sithasoionic7_shioninput();this._fb= new banano_sithasoionic7_sithasofirebase();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;_B._app.addpage(_B._name,_B._title,_B._icon);this.fbforgotpage(_B._app._pageviewer);_B._pageheader=_B._fbforgot._pageheader;_B._pagetitle=_B._fbforgot._pagetitle;_B._pagetoolbar=_B._fbforgot._pagetoolbar;_B._pagecontent=_B._fbforgot._pagecontent;_B._pagefooter=_B._fbforgot._pagefooter;_B._pagemenubutton=_B._fbforgot._pagemenubutton;_B._pagebackbutton=_B._fbforgot._pagebackbutton;_B._pagestartbuttons=_B._fbforgot._pagestartbuttons;_B._pageendbuttons=_B._fbforgot._pageendbuttons;_B._pagetitle.settext("Forgot Password");_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_banano_sithasoionicfirebaseauthentication_pgindex.showpage(_B._name);_B.clearform(_B);_B.clearvalidation(_B);};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.buildpage=function() {if (_B==null) _B=this;var _signform,_frmgrid,_forgotnote,_btnsendlink;_signform=_B._pagecontent.getroot().addform("frmforgot");_signform.setnovalidate(true);_frmgrid=_signform.getroot().addgrid("forgotgrid");_frmgrid.addrows3().addcolumns12();_frmgrid.buildgrid();_forgotnote=_frmgrid.cell(1,1).getroot().addparagraph("forgotnote","Enter your email address to receive a reset password link.");_forgotnote.settextwrap(true);_B._fpemail=_frmgrid.cell(2,1).getroot().addinputemail("fpemail","Email");_B._fpemail.setplaceholder("Email");_B._fpemail.setlabelplacement(_B._fpemail._labelplacement_floating);_B._fpemail.setclearinput(true);_B._fpemail.sethelpertext("Enter your email address");_B._fpemail.seterrortext("The email is required.");_B._fpemail.setfill(_B._fpemail._fill_outline);_B._fpemail.setmode("md");_btnsendlink=_frmgrid.cell(3,1).getroot().addbutton("btnsendlink","Send Link");_btnsendlink.setexpand(_btnsendlink._expand_block);};this.btnsendlink_click=async function(_e) {if (_B==null) _B=this;var _resp,_err,_bp,_umessage;_e.preventDefault();_B._app.resetvalidation();_B._app.validate(_B._fpemail.isblank());if (_B._app.isvalid()==false) {_B._app.showtoasterror("Required","Please enter required information!");return;}_B._app.showloading("Sending reset link...");_resp={};_err={};_bp=_B._fb._auth.sendpasswordresetemail(_B._fpemail.getvalue());_bp.then(async function(_resp) {_B._app.hideloading();_B.clearvalidation(_B);await _B._app.showtoastsuccess("","The password reset link has been sent to your email!");_banano_sithasoionicfirebaseauthentication_pgsignin.show();}).catch(async function(_err) {_B._app.hideloading();_B.clearvalidation(_B);_umessage=_B._fb._auth.errormessage(_err);await _B._app.showtoasterror("",_umessage);});};this.fbforgot_back_click=function(_e) {if (_B==null) _B=this;_banano_sithasoionicfirebaseauthentication_pgsignin.show();};this.clearform=function() {if (_B==null) _B=this;_B._fpemail.setvalue("");};this.clearvalidation=function() {if (_B==null) _B=this;_B._fpemail.clearvalidation();};this.fbforgotpage=function(Par) {_B._fbforgot=BANC( banano_sithasoionic7_shiontab,_B, "fbforgot", "fbforgot",u(Par), {"BackButtonHref": "/","BackButtonIcon": "","BackButtonText": "","CenterContent": false,"Component": "","ContentFullscreen": true,"ContentIonPadding": true,"ContentText": "","FooterTranslucent": false,"HasBackButton": true,"HasFooter": false,"HasHeader": true,"HasLeftButtons": true,"HasMenuButton": false,"HasRightButtons": false,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": true,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","Tab": "","Title": "Blank","TitleColor": "none","ToolbarColor": "none","TypeOf": "div","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 600,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sithasoionicfirebaseauthentication_pgindex() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._pageheader= new banano_sithasoionic7_shionheader();this._pagetitle= new banano_sithasoionic7_shiontitle();this._pagetoolbar= new banano_sithasoionic7_shiontoolbar();this._pagecontent= new banano_sithasoionic7_shioncontent();this._pagefooter= new banano_sithasoionic7_shionfooter();this._pagetabs= new banano_sithasoionic7_shiontabs();this._pagetabbar= new banano_sithasoionic7_shiontabbar();this._pagemenubutton= new banano_sithasoionic7_shionmenubutton();this._pagebackbutton= new banano_sithasoionic7_shionbackbutton();this._pagestartbuttons= new banano_sithasoionic7_shionbuttons();this._pageendbuttons= new banano_sithasoionic7_shionbuttons();this.initialize=async function() {if (_B==null) _B=this;await _B._app.initialize(_B,"ios");this.indexlayout(_B._app._here);_B._appmenutitle.settext(_banano_sithasoionicfirebaseauthentication._apptitle);_B._app.settoastcontroller(_B._apptoast);_B._app.setloadingcontroller(_B._apploading);_B._pageheader=_B._apppage._pageheader;_B._pagetitle=_B._apppage._pagetitle;_B._pagetoolbar=_B._apppage._pagetoolbar;_B._pagecontent=_B._apppage._pagecontent;_B._pagefooter=_B._apppage._pagefooter;_B._pagetabs=_B._apppage._pagetabs;_B._pagetabbar=_B._apppage._pagetabbar;_B._pagemenubutton=_B._apppage._pagemenubutton;_B._pagebackbutton=_B._apppage._pagebackbutton;_B._pagestartbuttons=_B._apppage._pagestartbuttons;_B._pageendbuttons=_B._apppage._pageendbuttons;_B._app._pageviewer=_B._apppage._pageviewer;await _B.addpages(_B);_B.adddraweritems(_B);_B.addpagetabs(_B);await _B.showpage(_banano_sithasoionicfirebaseauthentication_pgwelcome._name,_B);};this.applist_itemclick=async function(_e) {if (_B==null) _B=this;var _bshow,_itemid;_e.preventDefault();await _B._appmenu.close();_bshow=await _B.showpage(_e.target.id,_B);if (_bshow) { return ;}_itemid=_banano_sithasoionic7_modsithasoionic.mvfield(_e.target.id,1,"_");switch ("" + _itemid) {case "" + "":break;}};this.addpages=function() {if (_B==null) _B=this;_banano_sithasoionicfirebaseauthentication_pgsignin.initialize(_B._app);_banano_sithasoionicfirebaseauthentication_pgwelcome.initialize(_B._app);_banano_sithasoionicfirebaseauthentication_pgsignup.initialize(_B._app);_banano_sithasoionicfirebaseauthentication_pgforgotpassword.initialize(_B._app);};this.adddraweritems=function() {if (_B==null) _B=this;_B._applist.additempage(_banano_sithasoionicfirebaseauthentication_pgwelcome);_B._applist.additempage(_banano_sithasoionicfirebaseauthentication_pgsignin);_B._applist.additempage(_banano_sithasoionicfirebaseauthentication_pgsignup);_B._applist.additempage(_banano_sithasoionicfirebaseauthentication_pgforgotpassword);};this.addpagetabs=function() {if (_B==null) _B=this;};this.showpage=async function(_pgname) {if (_B==null) _B=this;var _bfound;_bfound=await _B._app.showpage(_B._apppage,_pgname);return _bfound;};this.isauthenticated=function(_b) {if (_B==null) _B=this;_B._appmenu.setvisible(_b);if (_B._apppage.gethastabs()) {_B._apppage._pagetabbar.setvisible(_b);}if (_B._apppage.gethasfooter()) {_B._apppage._pagefooter.setvisible(_b);}if (_B._apppage.gethasheader()) {_B._apppage._pageheader.setvisible(_b);}};this.apppage_pagedidchange=async function(_e) {if (_B==null) _B=this;var _currentpage;_currentpage=await _B._apppage.getselectedpage();switch ("" + _currentpage) {case "" + "searchbar":break;case "" + "refresh":break;}};this.apppage_pagewillchange=function(_e) {if (_B==null) _B=this;};this.indexlayout=function(Par) {u(Par).empty();_B._appsplit=BANC( banano_sithasoionic7_shionsplitpane,_B, "appsplit", "appsplit",u(Par), {"Border": "","ContentId": "apppage","Disabled": false,"SideMaxWidth": "","SideMinWidth": "","SideWidth": "","Visible": true,"When": "lg","B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 520,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._appmenu=BANC( banano_sithasoionic7_shionmenu,_B, "appmenu", "appmenu",u('#appsplit'), {"ContentId": "apppage","Disabled": false,"IsOpen": false,"MaxEdgeStart": "50","MenuId": "appmenu","Side": "start","SwipeGesture": false,"TypeOf": "none","Visible": true,"B4XLeft": 10,"B4XTop": 10,"B4XWidth": 230,"B4XHeight": 500,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._apppage=BANC( banano_sithasoionic7_shionpage,_B, "apppage", "apppage",u('#appsplit'), {"BackButtonHref": "","BackButtonIcon": "","BackButtonText": "","CenterContent": false,"ContentFullscreen": false,"ContentIonPadding": true,"ContentText": "","FooterTranslucent": false,"HasBackButton": false,"HasContent": true,"HasFooter": false,"HasHeader": false,"HasLeftButtons": true,"HasMenuButton": true,"HasRightButtons": true,"HasTabBar": false,"HasTabs": true,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": false,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","SelectedTab": "","TabBarColor": "none","TabBarPosition": "bottom","Title": "SithasoMoviesAPI","TitleColor": "none","ToolbarColor": "primary","TypeOf": "div","Visible": true,"B4XLeft": 250,"B4XTop": 10,"B4XWidth": 340,"B4XHeight": 500,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._appmenuheader=BANC( banano_sithasoionic7_shionheader,_B, "appmenuheader", "appmenuheader",u('#appmenu'), {"Collapse": "none","IonNoBorder": false,"Mode": "ios","Translucent": false,"Visible": true,"B4XLeft": 20,"B4XTop": 20,"B4XWidth": 210,"B4XHeight": 100,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._appmenutoolbar=BANC( banano_sithasoionic7_shiontoolbar,_B, "appmenutoolbar", "appmenutoolbar",u('#appmenuheader'), {"Background": "","BorderColor": "","BorderStyle": "","BorderWidth": "","Color": "primary","MinHeight": "","Mode": "ios","Opacity": "","PaddingBottom": "","PaddingEnd": "","PaddingStart": "","PaddingTop": "","Slot": "","TextColor": "","Visible": true,"B4XLeft": 30,"B4XTop": 30,"B4XWidth": 190,"B4XHeight": 80,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._appmenutitle=BANC( banano_sithasoionic7_shiontitle,_B, "appmenutitle", "appmenutitle",u('#appmenutoolbar'), {"Color": "none","Size": "none","Text": "SithasoMoviesAPI","TextColor": "","Visible": true,"B4XLeft": 40,"B4XTop": 40,"B4XWidth": 170,"B4XHeight": 60,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._appmenucontent=BANC( banano_sithasoionic7_shioncontent,_B, "appmenucontent", "appmenucontent",u('#appmenu'), {"CenterContent": false,"Color": "none","ForceOverscroll": false,"Fullscreen": false,"IonPadding": false,"IonPage": false,"ScrollEvents": false,"ScrollX": false,"ScrollY": false,"Slot": "","Text": "","Visible": true,"B4XLeft": 20,"B4XTop": 150,"B4XWidth": 210,"B4XHeight": 350,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._applist=BANC( banano_sithasoionic7_shionlist,_B, "applist", "applist",u('#appmenucontent'), {"Inset": false,"Lines": "none","Mode": "ios","ParentID": "","Slot": "","Visible": true,"B4XLeft": 30,"B4XTop": 160,"B4XWidth": 190,"B4XHeight": 330,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._apptoast=BANC( banano_sithasoionic7_shiontoast,_B, "apptoast", "apptoast",u(Par), {"Animated": true,"Color": "none","CssClass": "","Duration": 3000,"EnterAnimation": "","Header": "","Icon": "","IsOpen": false,"KeyboardClose": false,"Layout": "stacked","LeaveAnimation": "","Message": "","Mode": "ios","Position": "bottom","Translucent": false,"Trigger": "","Visible": true,"B4XLeft": 10,"B4XTop": 560,"B4XWidth": 90,"B4XHeight": 30,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._apploading=BANC( banano_sithasoionic7_shionloading,_B, "apploading", "apploading",u(Par), {"Animated": true,"BackdropDismiss": "","CssClass": "","Duration": "0","EnterAnimation": "","IsOpen": false,"KeyboardClose": true,"LeaveAnimation": "","Message": "","Mode": "ios","ParentID": "","ShowBackdrop": true,"Spinner": "","Translucent": false,"Trigger": "","Visible": true,"WillDismiss": "","WillPresent": "","B4XLeft": 110,"B4XTop": 560,"B4XWidth": 100,"B4XHeight": 30,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sithasoionicfirebaseauthentication_pgsignin() {var _B;this._name="fbsignin";this._title="FireBase SignIn";this._icon="logo-ionic";this._app= new banano_sithasoionic7_ionicapp();this._pageheader= new banano_sithasoionic7_shionheader();this._pagetitle= new banano_sithasoionic7_shiontitle();this._pagetoolbar= new banano_sithasoionic7_shiontoolbar();this._pagecontent= new banano_sithasoionic7_shioncontent();this._pagefooter= new banano_sithasoionic7_shionfooter();this._pagetabs= new banano_sithasoionic7_shiontabs();this._pagetabbar= new banano_sithasoionic7_shiontabbar();this._pagemenubutton= new banano_sithasoionic7_shionmenubutton();this._pagebackbutton= new banano_sithasoionic7_shionbackbutton();this._pagestartbuttons= new banano_sithasoionic7_shionbuttons();this._pageendbuttons= new banano_sithasoionic7_shionbuttons();this._email= new banano_sithasoionic7_shioninput();this._password= new banano_sithasoionic7_shioninput();this._fb= new banano_sithasoionic7_sithasofirebase();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;_B._app.addpage(_B._name,_B._title,_B._icon);this.fbsigninpage(_B._app._pageviewer);_B._pageheader=_B._fbsignin._pageheader;_B._pagetitle=_B._fbsignin._pagetitle;_B._pagetoolbar=_B._fbsignin._pagetoolbar;_B._pagecontent=_B._fbsignin._pagecontent;_B._pagefooter=_B._fbsignin._pagefooter;_B._pagemenubutton=_B._fbsignin._pagemenubutton;_B._pagebackbutton=_B._fbsignin._pagebackbutton;_B._pagestartbuttons=_B._fbsignin._pagestartbuttons;_B._pageendbuttons=_B._fbsignin._pageendbuttons;_B._pagetitle.settext("Sign In");_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_banano_sithasoionicfirebaseauthentication_pgindex.showpage(_B._name);_B.clearform(_B);_B.clearvalidation(_B);};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.buildpage=function() {if (_B==null) _B=this;var _signform,_frmgrid,_lblforgot,_lnk,_lblsignup,_fabonly1;_signform=_B._pagecontent.getroot().addform("frmsignin");_signform.setnovalidate(true);_frmgrid=_signform.getroot().addgrid("frmgrid");_frmgrid.addrows4().addcolumns12();_frmgrid.buildgrid();_B._email=_frmgrid.cell(1,1).getroot().addinputemail("email","Email");_B._email.setplaceholder("Email");_B._email.setlabelplacement(_B._email._labelplacement_floating);_B._email.setclearinput(true);_B._email.sethelpertext("Enter a valid email address");_B._email.seterrortext("The email is required.");_B._email.setfill(_B._email._fill_outline);_B._email.setmode("md");_B._password=_frmgrid.cell(2,1).getroot().addinputpassword("password","Password");_B._password.setplaceholder("Password");_B._password.setlabelplacement(_B._email._labelplacement_floating);_B._password.setclearinput(true);_B._password.sethelpertext("Password is required");_B._password.seterrortext("The password is required.");_B._password.setfill(_B._password._fill_outline);_B._password.setmode("md");_B._password.setcounter(true);_B._password.setmaxlength(20);_lblforgot=_frmgrid.cell(3,1).getroot().additemlink("lnkforgot","","Forgot Password");_lblforgot.setlines(_lblforgot._lines_none);_lnk=_lblforgot.getlink();_lnk.setslot("end");_lnk.addstyle({"font-weight":"400", "font-size":"0.8em", "text-decoration":"none"});_lblforgot.on("click",null);_lblsignup=_frmgrid.cell(4,1).getroot().additemtextlink("lnksignup","New Member?","","Sign Up Now");_lblsignup.setlines(_lblsignup._lines_none);_lblsignup.getspan().addstyle({"font-size":"0.9em"});_lblsignup.getlink().addstyle({"text-decoration":"none"});_lblsignup.on("click",null);_fabonly1=_B._pagecontent.getroot().addfabbuttonbottomright("fabonly1","chevron-forward");};this.lnksignup_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_banano_sithasoionicfirebaseauthentication_pgsignup._fb=_B._fb;_banano_sithasoionicfirebaseauthentication_pgsignup.show();};this.lnkforgot_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_banano_sithasoionicfirebaseauthentication_pgforgotpassword._fb=_B._fb;_banano_sithasoionicfirebaseauthentication_pgforgotpassword.show();};this.fbsignin_back_click=function(_e) {if (_B==null) _B=this;_banano_sithasoionicfirebaseauthentication_pgwelcome.show();};this.clearform=function() {if (_B==null) _B=this;_B._email.setvalue("");_B._password.setvalue("");};this.clearvalidation=function() {if (_B==null) _B=this;_B._email.clearvalidation();_B._password.clearvalidation();};this.fabonly1_click=async function(_e) {if (_B==null) _B=this;var _resp,_err,_bp,_user,_umessage;_e.preventDefault();_B._app.resetvalidation();_B._app.validate(_B._email.isblank());_B._app.validate(_B._password.isblank());if (_B._app.isvalid()==false) {_B._app.showtoasterror("Required","Please enter required information!");return;}_B._app.showloading("Signing in...");_resp={};_err={};_bp=_B._fb._auth.signinwithemailandpassword(_B._email.getvalue(),_B._password.getvalue());_bp.then(async function(_resp) {_B._app.hideloading();_B.clearvalidation(_B);_user=_B._fb._auth.getsignedinuserdetails(_resp);if (_B._fb._auth._user._emailverified==false) {await _B._app.showtoasterror("Email","Please verify your email first!");return;}_B.clearform(_B);_B.clearvalidation(_B);await _B._app.showtoastsuccess(_B._fb._auth._user._displayname,"You are signed in!");}).catch(async function(_err) {_B._app.hideloading();_B.clearvalidation(_B);_umessage=_B._fb._auth.errormessage(_err);await _B._app.showtoasterror("",_umessage);});};this.fbsigninpage=function(Par) {_B._fbsignin=BANC( banano_sithasoionic7_shiontab,_B, "fbsignin", "fbsignin",u(Par), {"BackButtonHref": "/","BackButtonIcon": "","BackButtonText": "","CenterContent": false,"Component": "","ContentFullscreen": true,"ContentIonPadding": true,"ContentText": "","FooterTranslucent": false,"HasBackButton": true,"HasFooter": false,"HasHeader": true,"HasLeftButtons": true,"HasMenuButton": false,"HasRightButtons": false,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": true,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","Tab": "","Title": "Blank","TitleColor": "none","ToolbarColor": "none","TypeOf": "div","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 600,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};} 
  const firebaseConfig = { 
    apiKey: "AIzaSyDmDJMLE1KEL2m7kx7V4yQzbLyV7DLsylA", 
    authDomain: "sithasoionic7.firebaseapp.com", 
    projectId: "sithasoionic7", 
    storageBucket: "sithasoionic7.appspot.com", 
    messagingSenderId: "315130973132", 
    appId: "1:315130973132:web:e1125bcd6ffdba44edab69" 
  }; 
function banano_sithasoionicfirebaseauthentication_pgsignup() {var _B;this._name="fbsignup";this._title="FireBase SignUp";this._icon="logo-ionic";this._app= new banano_sithasoionic7_ionicapp();this._pageheader= new banano_sithasoionic7_shionheader();this._pagetitle= new banano_sithasoionic7_shiontitle();this._pagetoolbar= new banano_sithasoionic7_shiontoolbar();this._pagecontent= new banano_sithasoionic7_shioncontent();this._pagefooter= new banano_sithasoionic7_shionfooter();this._pagetabs= new banano_sithasoionic7_shiontabs();this._pagetabbar= new banano_sithasoionic7_shiontabbar();this._pagemenubutton= new banano_sithasoionic7_shionmenubutton();this._pagebackbutton= new banano_sithasoionic7_shionbackbutton();this._pagestartbuttons= new banano_sithasoionic7_shionbuttons();this._pageendbuttons= new banano_sithasoionic7_shionbuttons();this._sufullname= new banano_sithasoionic7_shioninput();this._suemail= new banano_sithasoionic7_shioninput();this._supassword= new banano_sithasoionic7_shioninput();this._supassword1= new banano_sithasoionic7_shioninput();this._sutelephone= new banano_sithasoionic7_shioninput();this._fb= new banano_sithasoionic7_sithasofirebase();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;_B._app.addpage(_B._name,_B._title,_B._icon);this.fbsignuppage(_B._app._pageviewer);_B._pageheader=_B._fbsignup._pageheader;_B._pagetitle=_B._fbsignup._pagetitle;_B._pagetoolbar=_B._fbsignup._pagetoolbar;_B._pagecontent=_B._fbsignup._pagecontent;_B._pagefooter=_B._fbsignup._pagefooter;_B._pagemenubutton=_B._fbsignup._pagemenubutton;_B._pagebackbutton=_B._fbsignup._pagebackbutton;_B._pagestartbuttons=_B._fbsignup._pagestartbuttons;_B._pageendbuttons=_B._fbsignup._pageendbuttons;_B._pagetitle.settext("Sign Up");_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_banano_sithasoionicfirebaseauthentication_pgindex.showpage(_B._name);_B.clearform(_B);};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.buildpage=function() {if (_B==null) _B=this;var _signupform,_frmgrid,_lblsignup,_fabonly2;_signupform=_B._pagecontent.getroot().addform("frmsignup");_signupform.setnovalidate(true);_frmgrid=_signupform.getroot().addgrid("frmsugrid");_frmgrid.addrows6().addcolumns12();_frmgrid.buildgrid();_B._sufullname=_frmgrid.cell(1,1).getroot().addinput("sufullname","Full Name");_B._sufullname.setplaceholder("Full Name");_B._sufullname.setlabelplacement(_B._sufullname._labelplacement_floating);_B._sufullname.setclearinput(true);_B._sufullname.setfill(_B._sufullname._fill_outline);_B._sufullname.sethelpertext("Enter your full name.");_B._sufullname.setmode("md");_B._suemail=_frmgrid.cell(2,1).getroot().addinputemail("suemail","Email");_B._suemail.setplaceholder("Email");_B._suemail.setlabelplacement(_B._suemail._labelplacement_floating);_B._suemail.setclearinput(true);_B._suemail.setfill(_B._suemail._fill_outline);_B._suemail.sethelpertext("Enter a valid email address");_B._suemail.setmode("md");_B._supassword=_frmgrid.cell(3,1).getroot().addinputpassword("supassword","Password");_B._supassword.setplaceholder("Password");_B._supassword.setlabelplacement(_B._supassword._labelplacement_floating);_B._supassword.setclearinput(true);_B._supassword.setfill(_B._supassword._fill_outline);_B._supassword.sethelpertext("Password is required");_B._supassword.setmode("md");_B._supassword.setcounter(true);_B._supassword.setmaxlength(20);_B._supassword1=_frmgrid.cell(4,1).getroot().addinputpassword("supassword1","Confirm Password");_B._supassword1.setplaceholder("Confirm Password");_B._supassword1.setlabelplacement(_B._supassword._labelplacement_floating);_B._supassword1.setclearinput(true);_B._supassword1.setfill(_B._supassword1._fill_outline);_B._supassword1.sethelpertext("Confirm Password is required");_B._supassword1.setmode("md");_B._supassword1.setcounter(true);_B._supassword1.setmaxlength(20);_B._sutelephone=_frmgrid.cell(5,1).getroot().addinputtelephone("sutelephone","Mobile #");_B._sutelephone.setplaceholder("Mobile #");_B._sutelephone.setlabelplacement(_B._supassword._labelplacement_floating);_B._sutelephone.setclearinput(true);_B._sutelephone.setfill(_B._sutelephone._fill_outline);_B._sutelephone.sethelpertext("Enter your mobile number");_B._sutelephone.setmode("md");_lblsignup=_frmgrid.cell(6,1).getroot().additemtextlink("susignin","Have an Account?","","Sign In");_lblsignup.getspan().addstyle({"font-size":"0.9em"});_lblsignup.getlink().addstyle({"text-decoration":"none"});_lblsignup.on("click",null);_lblsignup.setlines(_lblsignup._lines_none);_fabonly2=_B._pagecontent.getroot().addfabbuttonbottomright("fabonly2","chevron-forward");};this.susignin_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_banano_sithasoionicfirebaseauthentication_pgsignin.show();};this.fbsignup_back_click=function(_e) {if (_B==null) _B=this;_banano_sithasoionicfirebaseauthentication_pgsignin.show();};this.fabonly2_click=async function(_e) {if (_B==null) _B=this;var _resp,_err,_bp,_rsusers,_umessage;_e.preventDefault();_B._app.resetvalidation();_B._app.validate(_B._sufullname.isblank());_B._app.validate(_B._suemail.isblank());_B._app.validate(_B._supassword.isblank());_B._app.validate(_B._supassword1.isblank());_B._app.validate(_B._sutelephone.isblank());if (_B._app.isvalid()==false) {_B._app.showtoasterror("Required","Please enter required information!");return;}if (_B._supassword.ismatch(_B._supassword1)==false) {_B._app.showtoasterror("Match","Password and Confirm Password don't match!");return;}_B._app.showloading("Creating the user...");_resp={};_err={};_bp=_B._fb._auth.createuserwithemailandpassword(_B._suemail.getvalue(),_B._supassword.getvalue());_bp.then(async function(_resp) {await _B._fb._auth.updateprofile(_B._sufullname.getvalue(),"");await _B._fb._auth.sendemailverification();_rsusers=_B._fb.collection("users");_rsusers.schemaaddfield("email",_rsusers._db_string);_rsusers.schemaaddfield("fullname",_rsusers._db_string);_rsusers.schemaaddfield("telephone",_rsusers._db_string);_rsusers.preparerecord();_rsusers.setfield("email",_B._suemail.getvalue());_rsusers.setfield("fullname",_B._sufullname.getvalue());_rsusers.setfield("telephone",_B._sutelephone.getvalue());await _rsusers.create();_B._app.hideloading();await _B._app.showtoastsuccess("","User created!");_B.clearform(_B);_B.clearvalidation(_B);_banano_sithasoionicfirebaseauthentication_pgsignin.show();}).catch(async function(_err) {_B._app.hideloading();_B.clearvalidation(_B);_umessage=_B._fb._auth.errormessage(_err);await _B._app.showtoasterror("",_umessage);});};this.clearform=function() {if (_B==null) _B=this;_B._sufullname.setvalue("");_B._suemail.setvalue("");_B._supassword.setvalue("");_B._supassword1.setvalue("");_B._sutelephone.setvalue("");};this.clearvalidation=function() {if (_B==null) _B=this;_B._sufullname.clearvalidation();_B._suemail.clearvalidation();_B._supassword.clearvalidation();_B._supassword1.clearvalidation();_B._sutelephone.clearvalidation();};this.fbsignuppage=function(Par) {_B._fbsignup=BANC( banano_sithasoionic7_shiontab,_B, "fbsignup", "fbsignup",u(Par), {"BackButtonHref": "/","BackButtonIcon": "","BackButtonText": "","CenterContent": false,"Component": "","ContentFullscreen": true,"ContentIonPadding": true,"ContentText": "","FooterTranslucent": false,"HasBackButton": true,"HasFooter": false,"HasHeader": true,"HasLeftButtons": true,"HasMenuButton": false,"HasRightButtons": false,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": true,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","Tab": "","Title": "Blank","TitleColor": "none","ToolbarColor": "none","TypeOf": "div","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 600,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sithasoionicfirebaseauthentication_pgwelcome() {var _B;this._name="fbwelcome";this._title="FireBase Welcome";this._icon="logo-ionic";this._app= new banano_sithasoionic7_ionicapp();this._pagecontent= new banano_sithasoionic7_shioncontent();this._fb= new banano_sithasoionic7_sithasofirebase();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;_B._app.addpage(_B._name,_B._title,_B._icon);this.fbwelcomepage(_B._app._pageviewer);_B._pagecontent=_B._fbwelcome._pagecontent;_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_banano_sithasoionicfirebaseauthentication_pgindex.showpage(_B._name);};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.buildpage=function() {if (_B==null) _B=this;var _container,_cimg,_ctitle,_fabonly;_container=_B._pagecontent.getroot().adddiv("container","");_container.addstyle({"text-align":"center", "left":"0px", "right":"0px", "margin-top":"50%"});_cimg=_container.addionimg("cimg","./assets/bg.png","","","");_ctitle=_container.addtitle("ctitle","Explore the SithasoIONIC7 world!");_ctitle.addstyle({"position":"relative"});_fabonly=_B._pagecontent.getroot().addfabbuttonbottomright("fabonly","chevron-forward");};this.fabonly_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_B._app.showloading("Connecting to FireBase...");_B._fb.initialize(_B,"fb");_B._fb._showlog=true;_B._fb._timestamponsnapshots=false;_B._fb._useanalytics=false;_B._fb._useauth=true;_B._fb._useperformance=false;_B._fb._usestorage=false;_B._fb._usefirestore=true;_B._fb._enablepersistence=false;_B._fb.connect();};this.fb_connected=async function(_success) {if (_B==null) _B=this;var _currentuser;_B._app.hideloading();if (_success) {_currentuser=_B._fb._auth.getcurrentuser();if (is.null(_currentuser)) {await _B._fb._auth.signout();}_banano_sithasoionicfirebaseauthentication_pgsignin._fb=_B._fb;_banano_sithasoionicfirebaseauthentication_pgsignin.show();} else {_B._app.showtoasterror("FireBase","Could not connect!");}};this.fb_onauthstatechanged=function(_user) {if (_B==null) _B=this;};this.fbwelcomepage=function(Par) {_B._fbwelcome=BANC( banano_sithasoionic7_shiontab,_B, "fbwelcome", "fbwelcome",u(Par), {"BackButtonHref": "/","BackButtonIcon": "","BackButtonText": "","CenterContent": false,"Component": "","ContentFullscreen": true,"ContentIonPadding": true,"ContentText": "","FooterTranslucent": false,"HasBackButton": false,"HasFooter": false,"HasHeader": false,"HasLeftButtons": false,"HasMenuButton": false,"HasRightButtons": false,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": true,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","Tab": "","Title": "Blank","TitleColor": "none","ToolbarColor": "primary","TypeOf": "div","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 600,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sithasoionicfirebaseauthentication() {var _B;this._appname="sithasoionicfbauthentication";this._apptitle="SithasoIONIC7 - FireBase Authentication";this._publish="C:\laragon\www";this._version="0.01";this._serverip="";this.banano_ready=function() {if (_B==null) _B=this;_banano_sithasoionicfirebaseauthentication_pgindex.initialize();};}function banano_sithasoionic7_page() {var _B=this;_B._name="";_B._title="";_B._icon="";_B.initialize=function() {};}function banano_sithasoionic7_profiletype() {var _B=this;_B._id="";_B._name="";_B._verified=false;_B._email="";_B._token="";_B._avatar="";_B._username="";_B._size=0;_B.initialize=function() {};}function banano_sithasoionic7_gridrow() {var _B=this;_B._rows=0;_B._columns=[];_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_gridcolumn() {var _B=this;_B._columns=0;_B._gxs="";_B._gsm="";_B._gmd="";_B._glg="";_B._gxl="";_B._ofxs="";_B._ofsm="";_B._ofmd="";_B._oflg="";_B._ofxl="";_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_prefitem() {var _B=this;_B._title={};_B._itemtype=0;_B._extra={};_B._key="";_B._required=false;_B._component={};_B.initialize=function() {};}function banano_sithasoionic7_sithasofirebaseuser() {var _B=this;_B._uid="";_B._displayname="";_B._email="";_B._emailverified=false;_B._photourl="";_B._isanonymous=false;_B._phonenumber="";_B._authenticated=false;_B._refreshtoken="";_B.initialize=function() {};}window.addEventListener('online', function() {if (typeof _banano_sithasoionicfirebaseauthentication['banano_online']==="function") {_banano_sithasoionicfirebaseauthentication.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_sithasoionicfirebaseauthentication['banano_offline']==="function") {_banano_sithasoionicfirebaseauthentication.banano_offline();}});var BANversion=1694467670649;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_sithasoionicfirebaseauthentication.banano_ready();}}var hidden, visibilityChange;if (typeof document.hidden !== "undefined") {hidden = "hidden";visibilityChange = "visibilitychange";} else if (typeof document.msHidden !== "undefined") {hidden = "msHidden";visibilityChange = "msvisibilitychange";} else if (typeof document.webkitHidden !== "undefined") {hidden = "webkitHidden";visibilityChange = "webkitvisibilitychange";}function handleVisibilityChange() {if (document[hidden]) {if (typeof _banano_sithasoionicfirebaseauthentication['banano_visibilitychanged']==="function") {_banano_sithasoionicfirebaseauthentication.banano_visibilitychanged(false);}} else {if (typeof _banano_sithasoionicfirebaseauthentication['banano_visibilitychanged']==="function") {_banano_sithasoionicfirebaseauthentication.banano_visibilitychanged(true);}}};if (typeof document.addEventListener === "undefined" || hidden === undefined) {console.log("This requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");} else {document.addEventListener(visibilityChange, handleVisibilityChange, false);}window.addEventListener('resize', function(event) {if (typeof _banano_sithasoionicfirebaseauthentication['banano_resized']==="function") {_banano_sithasoionicfirebaseauthentication.banano_resized();}}, true);