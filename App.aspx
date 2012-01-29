<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="App.aspx.cs" Inherits="greensta.Questions" %>

<asp:Content ID="HeadContent" ContentPlaceHolderID="HeadContent" runat="server">
    <script src="Scripts/ddg.core.min.js" type="text/javascript"></script>
    <script src="Scripts/highstock/highstock.src.js" type="text/javascript"></script>
    <script src="Scripts/greensta/data.js" type="text/javascript"></script>
    <script src="Scripts/greensta/app.js" type="text/javascript"></script>
    <script src="Scripts/greensta/crocp.js" type="text/javascript"></script>
    <script src="Scripts/greensta/energy.js" type="text/javascript"></script>
    <script src="Scripts/greensta/chart.js" type="text/javascript"></script>
    <script src="Scripts/greensta/visualise.js" type="text/javascript"></script>
    <style type="text/css">
        .buttons
        {
            margin-top: 20px;
        }
    </style>
</asp:Content>
<asp:Content ID="HeaderContent" ContentPlaceHolderID="HeaderContent" runat="server">
    <h1>
    </h1>
</asp:Content>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="hppage">
        <section id="question_page">
     
         <div class="leftcol">       
            <div class="formitem">
                <label for="salary">What is your annual salary?</label>
                <input type="text" id="salary" />
            </div>  

            <div class="formitem">
                <label for="drivecar">
                    Do you own a car?
                </label>
                <input type="radio" class="radio"  name="drivecar" value="yes" /> Yes &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" class="radio"  name="drivecar" value="no" checked="checked" /> No
            </div>

            <div id="car_amount" class="formitem" style="display: none;">
                <label for="travel">
                    How much do you spend on car fuel each month?</label>
                <input type="text" id="car" />
            </div>

            <div class="formitem">
                <label for="usepubtran">
                    Do you use public transport?
                </label>
                <input type="radio" class="radio" name="usepubtran" value="yes" />  Yes &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" class="radio" name="usepubtran" value="no" checked="checked" /> No
            </div>
            <div id="pubtran_amount" class="formitem" style="display: none;">
                <label for="travel">
                    How much do you spend on public transport each month?</label>
                <input type="text" id="pubtran" />
            </div>

         </div>

         <div class="rightcol">        

           <div class="formitem">
                <label for="gas">How much is your monthly gas bill?</label>
                <input type="text" id="gas" />
            </div>

            <div class="formitem">
                <label for="electricity">How much is your monthly electricity bill?</label>
                <input type="text" id="electricity" />
            </div>          

            <div class="formitem">
                <label for="food">How much do you spend on food each month?</label>
                <input type="text" id="food" />
            </div>
            
            <div class="input">
                <a id="respond" href="App.aspx">Show me the money</a>
            </div>  
        </div>         

    </section>
    </div>
    <section id="chart_page" style="display: none">
        <div class="leftcol">
            <div id="chart"></div>
            <div class="buttons">
                <input type="button" id="back" value="Back" />
            </div>
        </div>
        <div class="rightcol">
            <p style="font-size:16px; font-style:italic;">Mouse over chart for more information</p>

            <div id="rightcontent" style="display:none; margin-top:25px;">
                <div>
                  <h2>  This chart means in <span id="vis_year"></span> you have <span id="vis_amount"></span>
                    left to spend after you've paid for energy and food. This could be used to buy...</h2>
                </div>

                <div>
                    <hr />
                    <div id="shoe" class="item" style="overflow:hidden;">
                            <div style="float:left;">
                                <span class="number"></span><br />
                                Shoes<br />
                                <em class="cost"></em>
                            </div>
                        <div class="items" style="padding-left:100px;">
                        </div>
                    </div>                           
                    <hr />
                    <div id="pint" class="item" style="overflow:hidden;">
                            <div style="float:left;">
                                <span class="number"></span><br />
                                Pints<br />
                                <em class="cost"></em>
                            </div>
                        <div class="items" style="padding-left:100px;">
                        </div>
                    </div>     
                    <hr />
                    <div id="ticket" class="item" style="overflow:hidden;">
                            <div style="float:left;">
                                <span class="number"></span><br />
                                Cinema Tickets<br />
                                <em class="cost"></em>
                            </div>
                        <div class="items" style="padding-left:100px;">
                        </div>
                    </div>     
                    <hr />
                </div>
            </div>
        
        </div>
    </section>
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
