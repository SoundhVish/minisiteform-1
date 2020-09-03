import React from "react";
import '../assets/css/Img_upload.css';
import $ from 'jquery';
import {Button} from '@material-ui/core';
class Img_upload extends React.Component {
    componentDidMount()
{
    function readURL(input, imgControlName) {
        if (input.files && input.files[0]) {
      var reader = new FileReader();
          reader.onload = function(e) {
            $(imgControlName).attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
      var a="imag"+this.props.id;
      var sin_files=document.getElementById("imag" +this.props.id);
      console.log(sin_files);
      var b="ImagePreview"+ this.props.id;
      $("#imag"+ this.props.id).change(function() {
        // add your logic to decide which image control you'll use
        var imgControlName = document.getElementById(b);
      
        readURL(this, imgControlName);
        $("#"+b).addClass('it');
      });
      
     
      
    
    }
    render(){
        
         
      return (
  
          <div className="yes">
            <Button className="btn_upload" style={{backgroundColor:'#34C7CC',width:'200px',padding:'5px',color:'white'}}>
              <input accept="image/*" type="file" id={"imag"+ this.props.id}  name={"imag"+ this.props.id+ "[]"} className="input-img"  />
              {this.props.heading}
            </Button>
            <img id={"ImagePreview"+this.props.id} className="preview1" />
          
         
        </div>
      );
    }
}

export default Img_upload;