<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="App.aspx.cs" Inherits="greensta.Questions" %>

<asp:Content ID="HeaderContent" ContentPlaceHolderID="HeadContent" runat="server">
    <script src="Scripts/ddg.core.min.js" type="text/javascript"></script>
    <script src="Scripts/highstock/highstock.src.js" type="text/javascript"></script>
    <script src="Scripts/greensta/app.js" type="text/javascript"></script>
    <script src="Scripts/greensta/salary.js" type="text/javascript"></script>
    <script src="Scripts/greensta/energy.js" type="text/javascript"></script>
    <script src="Scripts/greensta/chart.js" type="text/javascript"></script>
    <style type="text/css">
        .buttons
        {
            margin-top: 20px;
        }
    </style>
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div id="question_page">
        <div>
            <p>
                What is your annual salary?
            </p>
            <input type="text" id="salary" />
        </div>
        <div>
            <p>
                How much do you spend on electricity each month?
            </p>
            <input type="text" id="electricity" />
        </div>
        <div>
            <p>
                How much do you spend on gas each month?
            </p>
            <input type="text" id="gas" />
        </div>
        <div>
            <p>
                Do you drive a car?
            </p>
            <input type="radio" name="drivecar" value="yes" />
            Yes
            <input type="radio" name="drivecar" value="no" />
            No
        </div>
        <div class="buttons">
            <input type="button" id="respond" value="Respond" />
        </div>
    </div>
    <div id="chart_page" style="display: none">
        <div id="chart">
        </div>
        <div class="buttons">
            <input type="button" id="back" value="&laquo; Back" />
        </div>
    </div>
    <script type="text/javascript">
    <!--
        $ddgload(function () {
            window.app = $ddgcreate({
                type: greensta.app
            });
        });
    // -->    
    </script>
</asp:Content>
