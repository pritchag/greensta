<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs" Inherits="greensta._Default" %>

<asp:Content ID="HeadContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeaderContent">
          <div class="hppage">   <h1>
                 What can you afford in the future?
            </h1>
            
            </div>
</asp:Content>

<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
     
    <section>
     <div class="hppage"> 
       <p><a href="/app.aspx" class="survey"> <span>Find out</span><br />       
       take the survey       
       </a></p>
     </div>
    </section>
        
</asp:Content>

