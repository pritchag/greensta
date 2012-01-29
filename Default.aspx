<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs" Inherits="greensta._Default" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
   <!-- header open tag appears in the master -->
        
             <h1>
                 What can you afford in the future?
            </h1>
            <h2>Just answer the questions below to find out </h2>
       
    </header>
    <section>
    
       <p><a href="/app.aspx" class="survey"> <span>Find out</span><br />
       
       take the survey
       
       </aspa></a></p>
    
    </section>
    <section>
        <div class="leftcol">       
        <div class="formitem">
            <label for="salary">What is your salary</label>
            <input type="text" name="salary" id="salary" />
        </div>
  
     </div>

     <div class="rightcol">        
        <div class="formitem">
            <label for="gasbill">What is your monthly gas bill?</label>
            <input type="text" name="gasbill" id="gasbill" />
        </div>
        <div class="formitem">
            <label for="elecbill">What is your monthly electricity bill?</label>
            <input type="text" name="elecbill" id="elecbill" />
        </div>
        <div class="formitem">
            <label for="salary">What is your salary?</label>
            <input type="text" name="salary" id="Text3" />
        </div>
        <div class="car">
            <label for="car">Do you own a car?</label>
            Yes <input type="radio" name="car" id="car" /><br />
            No &nbsp;<input type="radio" name="car" id="car" />
        </div>

        <div class="formitem">
            <label for="travel">How much do you spend on travel?</label>
            <input type="text" name="travel" id="travel" />
        </div>
       
   </div>
   <div class="clear"></div>
   <div class="input">
        <a href="App.aspx">Show me the money</a>
   </div>
    
   </section>
    
</asp:Content>
