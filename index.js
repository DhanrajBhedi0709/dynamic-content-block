var sdk = new window.sfdc.BlockSDK();
document.getElementById( 'sitelink' ).addEventListener( 'change', function() {
    var url = document.getElementById( 'sitelink' ).value;
    console.log(url);
    var code = `<script runat="server" language="JavaScript">
    Platform.Load("Core","1");
    var responseContent = HTTP.Get('${url}');
    var result = Platform.Function.ParseJSON( responseContent.Content );
    if( result.length > 0 ) {
    Write( '<table width="100%" align="center" bordercolor="white" cellpadding="0" cellspacing="0" style="border-style: hidden; border-collapse: collapse; table-layout: fixed;">' );
    Write( '' );
    for(i = 0; i<result.length; i++ ) {
    Write( '<tr>' );
    Write( '<td class="responsive-td" align="left" valign="top" style="padding: 0px 10px; text-align: left;">' );
    Write( '<table width="100%" align="center" cellpadding="0" cellspacing="0" style="border: 1px solid rgb(204, 204, 204); margin-bottom: 20px; table-layout: fixed;">' );
    Write( '' );
    Write( '<tr>' );
    Write( '<td class="responsive-td" valign="top" style="border: 0px hidden; overflow: hidden; width: 30%; padding: 15px 0px 0px 10px;">');
    Write( '<a href="' + result[i].link + '" target="_blank" style="display: block;">' );
    if( result[i]._embedded['wp:featuredmedia'][0].source_url ) {
        Write( '<img src="' + result[i]._embedded['wp:featuredmedia'][0].source_url + '" border="0" style="width: 100%; display: block; margin: 0px auto; object-fit: cover; height: auto;">' );
        } else {
        Write( '<div style="background-color: rgb(199, 199, 199); height: 80px; width: 100%;"></div>');
        }
    Write( '</a>');
    Write( '</td>' );
    Write( '<td valign="top" style="border: 0px hidden; box-sizing: border-box; padding: 10px; display: inline-block;">');
    Write( '<a href="' + result[i].link + '" target="_blank" style="text-decoration: none; display: block;"><h3 style="display: block; margin-bottom: 5px; margin-top: 5px; line-height: 1.1em; color: rgb(51, 51, 51);">' + result[i].title.rendered + '</h3></a>');
    Write( '<div style="line-height: 1.1em; color: rgb(51, 51, 51);">A look back at 2021, our work with Google on AMP 2.2, Openverse – an open-source image project, and more.</div>');
    Write( '<p style="margin: 5px 0px 0px; line-height: 1.5em; box-sizing: border-box;"><span style="color: rgb(255, 255, 255); padding: 2px 5px; font-size: 10px; font-family: Arial, sans-serif; font-weight: 400; line-height: 1.5em; letter-spacing: 0px; display: inline-block; background-color: rgb(0, 0, 0); border-radius: 5px; margin-right: 5px;">News</span></p>');
    Write( '</td>' );
    Write( '</tr>' );
    Write( '' );
    Write( '</table>' );
    Write( '</td>' );
    Write( '</tr>' );
    };
    Write( '' );
    Write( '</table>' );
    };
    </script>`;

    sdk.setContent( code );
} );