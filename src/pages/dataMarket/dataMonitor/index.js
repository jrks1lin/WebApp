import React from 'react';
class dataMonitor extends React.Component{

  constructor(props){
    super(props);

    this.state={
      name:"name",
      password:"password",
      inpValu:'222'
    }

    this.show = this.show.bind();

/*    this.name = React.createRef();
    this.password = React.createRef();*/
  }

  /*registerIn(name,password) {

    if (name == ""){
      alert("请输入用户名")
      return;
    }else if(password == ""){
      alert("请输入密码")
      return ;
    }else{
      $.ajax({
        url:"http://localhost:8081/add_admin",
        type:"GET",
        data:{
          username:name,
          password:password
        },
        dataType:'json',
        success:function (data, b) {
          if(data.code == "1005")
          {
            alert("注册失败")
          }
          if(data.code == "1000"){
            window.location.href="dl.html"
          }
        },
        error:function (err) {
          alert("失败!");
          console.log(err)
        }
      })
    }
  }*/

 show = () => {
   const input_name = document.getElementById("text_name");
   const input_password = document.getElementById("password_name");
   console.log(input_name.value);
   console.log(input_password.value);

 }



  render() {

    console.log(this.state.inpValu)
    console.log(this)
    console.log(this.state.name)
    console.log(this.state.password)

    return (
      <div>
        <input type="text" id="text_name" /> &nbsp; &nbsp;
        <input type="text" id="password_name"/>
        <button type="text" onClick={this.show}>注册</button>
      </div>
    );
  }
}
export default dataMonitor;
