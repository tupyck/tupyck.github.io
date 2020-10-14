const iframe = document.querySelector("iframe");

const btn = document.querySelector("#copy");
const gen = document.querySelector("#generisi");

const form = document.querySelector("form");

btn.addEventListener("click", copygmail);
gen.addEventListener("click", generisi);

const a = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>
    <head>
        <title>Email Signature</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
        <style type="text/css">
            /* GENERAL STYLE RESETS */
            #bodyTable {
                margin: 0;
                padding: 0;
            }

            img,
            a img {
                border: 0;
                outline: none;
                text-decoration: none;
            }

            .imageFix {
                display: block;
            }

            table,
            td {
                border-collapse: collapse;
            }

            /* CLIENT-SPECIFIC RESETS */
            .ReadMsgBody {
                width: 100%;
            }

            .ExternalClass {
                width: 100%;
            }

            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }

            table,
            td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }

            img {
                -ms-interpolation-mode: bicubic;
            }

            body,
            table,
            td,
            p,
            a,
            li,
            blockquote {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
        </style>
        <!--[if (mso)|(mso 16)]>
        <style type="text/css">
            a {text-decoration: none;}
            body, table, td {font-family: Arial, Helvetica, sans-serif !important; font-size: 11pt !important;}
        </style>
    <![endif]-->
    </head>

    <body style="font-family: Arial, Helvetica, sans-serif; font-size: 11pt; color: #333333; overflow: hidden;">
        <table id="BNESignature" style="width: 475px !important; height: 189px !important">
            <tr>
                <td style="padding-right: 10px; height: 180px; width: 38.2%">
                    <img src="https://drive.google.com/thumbnail?id=1_-ztTC8ASxImDdvRyw8rVw3ycGAJkCdz" style="height: 189px">
                </td>
                <td style="border-left: #c0c0c0 solid 3px; padding-left: 2px; vertical-align: top">
                    <table>
                            <tr>
                                <td style="padding-bottom: 20px">
                                        <span style="color: #045D85; font-weight: bold; font-size: 15pt">Ime i prezime</span><br>
                                        <span style="color: #045D85; font-weight: bold; font-size: 11pt">Brand New Engineers</span><br>
                                        <span style="color: #a0a0a0">Pozicija</span>
                                </td>
                            </tr>
                            <!-- <tr><td>Ime i prezime</td></tr> -->
                            <!-- <tr><td>Brand New Engineers</td></tr> -->
                            <!-- <tr><td>Pozicija</td></tr> -->
                            <!-- <tr><td style="width: 24px">X</td><td>Broj</td></tr> -->
                            <tr>
                                <td>
                                    <table>
                                        <tr>
                                            <td><img src="https://drive.google.com/thumbnail?id=1ycXElypr_SbugWuMCJdVklGPaFBegVUy" style="width: 0.41cm; height: 0.41cm; padding-right: 5px"></td>
                                            <td style="color: #a0a0a0; padding-bottom: 5px">+381 xxxxxxxxx</td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://drive.google.com/thumbnail?id=1JQd4_jDFI2nYlJ3oGNhjiwpYP_JJj8ow" style="width: 0.41cm; height: 0.33cm"></td>
                                            <td style="padding-bottom: 5px">neko@nesto.com</td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://drive.google.com/thumbnail?id=1wuKz4icPBv0zfrziQO8wKhRR8cTKq4Mj" style="width: 0.41cm; height: 0.41cm"></td>
                                            <td style="padding-bottom: 10px"><a href="http://www.brandnewengineers.rs" style="color: #045D85">brandnewengineers.rs</a></td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://business.facebook.com/BrandNewEngineers/"><img src="https://drive.google.com/thumbnail?id=1QkJHu8xMBpeFmPnV2fFQQANtoSHSm1HF" style="width: 0.41cm; height: 0.41cm"></a></td>
                                            <td><a href="https://www.instagram.com/brand_new_engineers/"><img src="https://drive.google.com/thumbnail?id=1R2bo0M1qw0Yd2st_NfJA1BwngeF-NC8b" style="width: 0.41cm; height: 0.41cm"></a></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <!-- <tr><td><img src="https://drive.google.com/thumbnail?id=1ycXElypr_SbugWuMCJdVklGPaFBegVUy" style="width: 0.41cm; height: 0.41cm"></td><td>Broj</td></tr> -->
                            <!-- <tr><td><img src="https://drive.google.com/thumbnail?id=1JQd4_jDFI2nYlJ3oGNhjiwpYP_JJj8ow" style="width: 0.41cm; height: 0.33cm"></td><td>Email</td></tr> -->
                            <!-- <tr><td><img src="https://drive.google.com/thumbnail?id=1wuKz4icPBv0zfrziQO8wKhRR8cTKq4Mj" style="width: 0.41cm; height: 0.41cm"></td><td><a href="http://www.brandnewengineers.rs">brandnewengineers.rs</a></td></tr> -->
                    </table>
                </td>
            </tr>
        </table>
        <!-- main table (wraps everything, 100% width, 1 row, 1 col) -->
    </body>
    </html>`;

iframe.contentDocument.open();
iframe.contentDocument.write(a);
iframe.contentDocument.close();

// Fix iframe height
iframe.height = iframe.contentWindow.document.body.scrollHeight + 5;

function copygmail() {

    // Select all and copy to clipboard. For this, the document needs to be in designMode.
    // Note: execCommand is obsolete, but this seemed to work best this way...
    iframe.contentDocument.designMode = "on";
    iframe.contentDocument.execCommand("selectAll", false, null);
    iframe.contentDocument.execCommand("copy", false, null);
    iframe.contentDocument.designMode = "off";

    // Clear the selection
    if (iframe.contentWindow.getSelection) {
        if (iframe.contentWindow.getSelection().empty) { // Chrome
            iframe.contentWindow.getSelection().empty();
        } else if (iframe.contentWindow.getSelection().removeAllRanges) { // Firefox
            iframe.contentWindow.getSelection().removeAllRanges();
        }
    } else if (iframe.contentDocument.selection) { // IE?
        iframe.contentDocument.selection.empty();
    }
}

function generisi(event) {
    event.preventDefault();
    const fullname = form["fullname"].value;
    const position = form["position"].value;
    const phone = form["phone"].value;
    const email = form["email"].value;
    const s = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html>
    <head>
        <title>Email Signature</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
        <style type="text/css">
            /* GENERAL STYLE RESETS */
            #bodyTable {
                margin: 0;
                padding: 0;
            }

            img,
            a img {
                border: 0;
                outline: none;
                text-decoration: none;
            }

            .imageFix {
                display: block;
            }

            table,
            td {
                border-collapse: collapse;
            }

            /* CLIENT-SPECIFIC RESETS */
            .ReadMsgBody {
                width: 100%;
            }

            .ExternalClass {
                width: 100%;
            }

            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }

            table,
            td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }

            img {
                -ms-interpolation-mode: bicubic;
            }

            body,
            table,
            td,
            p,
            a,
            li,
            blockquote {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
        </style>
        <!--[if (mso)|(mso 16)]>
        <style type="text/css">
            a {text-decoration: none;}
            body, table, td {font-family: Arial, Helvetica, sans-serif !important; font-size: 11pt !important;}
        </style>
    <![endif]-->
    </head>

    <body style="font-family: Arial, Helvetica, sans-serif; font-size: 11pt; color: #333333; overflow: hidden;">
        <table id="BNESignature" style="width: 475px !important; height: 189px !important">
            <tr>
                <td style="padding-right: 10px; height: 180px; width: 38.2%">
                    <img src="https://drive.google.com/thumbnail?id=1_-ztTC8ASxImDdvRyw8rVw3ycGAJkCdz" style="height: 189px">
                </td>
                <td style="border-left: #c0c0c0 solid 3px; padding-left: 2px; vertical-align: top">
                    <table>
                            <tr>
                                <td style="padding-bottom: 20px">
                                        <span style="color: #045D85; font-weight: bold; font-size: 15pt">${fullname}</span><br>
                                        <span style="color: #045D85; font-weight: bold; font-size: 11pt">Brand New Engineers</span><br>
                                        <span style="color: #a0a0a0">${position}</span>
                                </td>
                            </tr>
                            <!-- <tr><td>Ime i prezime</td></tr> -->
                            <!-- <tr><td>Brand New Engineers</td></tr> -->
                            <!-- <tr><td>Pozicija</td></tr> -->
                            <!-- <tr><td style="width: 24px">X</td><td>Broj</td></tr> -->
                            <tr>
                                <td>
                                    <table>
                                        <tr>
                                            <td><img src="https://drive.google.com/thumbnail?id=1ycXElypr_SbugWuMCJdVklGPaFBegVUy" style="width: 0.41cm; height: 0.41cm; padding-right: 5px"></td>
                                            <td style="color: #a0a0a0; padding-bottom: 5px">${phone}</td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://drive.google.com/thumbnail?id=1JQd4_jDFI2nYlJ3oGNhjiwpYP_JJj8ow" style="width: 0.41cm; height: 0.33cm"></td>
                                            <td style="padding-bottom: 5px">${email}</td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://drive.google.com/thumbnail?id=1wuKz4icPBv0zfrziQO8wKhRR8cTKq4Mj" style="width: 0.41cm; height: 0.41cm"></td>
                                            <td style="padding-bottom: 10px"><a href="http://www.brandnewengineers.rs" style="color: #045D85">brandnewengineers.rs</a></td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://business.facebook.com/BrandNewEngineers/"><img src="https://drive.google.com/thumbnail?id=1QkJHu8xMBpeFmPnV2fFQQANtoSHSm1HF" style="width: 0.41cm; height: 0.41cm"></a></td>
                                            <td><a href="https://www.instagram.com/brand_new_engineers/"><img src="https://drive.google.com/thumbnail?id=1R2bo0M1qw0Yd2st_NfJA1BwngeF-NC8b" style="width: 0.41cm; height: 0.41cm"></a></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <!-- <tr><td><img src="https://drive.google.com/thumbnail?id=1ycXElypr_SbugWuMCJdVklGPaFBegVUy" style="width: 0.41cm; height: 0.41cm"></td><td>Broj</td></tr> -->
                            <!-- <tr><td><img src="https://drive.google.com/thumbnail?id=1JQd4_jDFI2nYlJ3oGNhjiwpYP_JJj8ow" style="width: 0.41cm; height: 0.33cm"></td><td>Email</td></tr> -->
                            <!-- <tr><td><img src="https://drive.google.com/thumbnail?id=1wuKz4icPBv0zfrziQO8wKhRR8cTKq4Mj" style="width: 0.41cm; height: 0.41cm"></td><td><a href="http://www.brandnewengineers.rs">brandnewengineers.rs</a></td></tr> -->
                    </table>
                </td>
            </tr>
        </table>
        <!-- main table (wraps everything, 100% width, 1 row, 1 col) -->
    </body>
    </html>`;

    iframe.contentDocument.open();
    iframe.contentDocument.write(s);
    iframe.contentDocument.close();

    // Fix iframe height
    iframe.height = iframe.contentWindow.document.body.scrollHeight + 5;
}


