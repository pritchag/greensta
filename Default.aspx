<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs" Inherits="greensta._Default" %>

<asp:Content ID="HeadContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeaderContent">
             <h1>
                 What can you afford in the future?
            </h1>
            <h2>Just answer the questions below to find out </h2>
</asp:Content>

<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
     
    <section>
    
       <p><a href="/app.aspx" class="survey"> <span>Find out</span><br />       
       take the survey       
       </a></p>
    
    </section>
        
</asp:Content>
