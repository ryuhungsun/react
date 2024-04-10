import { useForm } from "react-hook-form";
import axios from "axios";
//import Session from 'react-session-api';
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
    const navigate = useNavigate();
    
    
    const onSubmit = async (data) => {

        let formData = new FormData();
        formData.append("number", "number1");
        formData.append("email", "name1");
        formData.append("password", "address1");

        let form = JSON.stringify(data);
        await new Promise((r) => setTimeout(r, 1_000));

        axios.get(props.db+`/api/login`, {params:{data}}).then(reponse => { 
            //setEmployeeList(reponse.data);
          console.log(reponse.data);
          if(reponse.data.length === 0){
            alert("회원이 아닙니다.\n 이메일, 패스워드를 확인하세요.");
          }else{
            console.log("########### ",JSON.stringify(reponse.data[0]));
            console.log("########### ",JSON.stringify(reponse.data[0].login));
            localStorage.setItem("member",JSON.stringify(reponse.data[0]));
            // console.log(JSON.parse(localStorage.getItem("member")).name);
            
            props.setLogin(true);//JSON.stringify(reponse.data[0].login));
            navigate("/");
          }
        });
      }

    
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isSubmitted, errors }
      } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">

            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">주성 정보</h1>
                                        </div>
                                        
                                            <div className="form-group">
          
                                                <input type="text" className="form-control form-control-user"
                                                    id="email" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                    {...register("email", {
                                                    required:" ",
                                                    pattern: {
                                                        value: /\S+@\S+\.\S+/
                                                    }
                                                    })}/>
                                                    {errors.email?.type === 'required'&& <p className="text-danger">이메일은 필수 입력입니다.</p>}
                                                    {errors.email?.type === 'pattern'&& <p className="text-danger">이메일 형식에 맞지 않습니다.</p>}
                                                    
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password"
                                                    aria-invalid={
                                                        isSubmitted ? (errors.password ? "true" : "false") : undefined
                                                    }
                                                    {...register("password", {
                                                        required: " ",
                                                        minLength: {
                                                        value: 4,
                                                        message: ""
                                                        }
                                                    })}/>
                                                    {errors.password?.type === 'required'&& <p className="text-danger">비밀번호는 필수 입력입니다.</p>}
                                                    {errors.password?.type === 'minLength'&& <p className="text-danger">4자리 이상 비밀번호를 사용하세요.</p>}
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                        <label className="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                </div>
                                            </div>
                                            
                                            <button type="submit" className="btn btn-primary btn-user btn-block">로그인</button>
                                            {/* <hr/>
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a> */}
                                        
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">비밀번호 찾기</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="register.html">회원가입</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        </form>
    );
}

export default LoginForm; 