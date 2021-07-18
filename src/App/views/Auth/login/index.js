import { Form, Input, Button, Typography, Card } from "antd";
import { useHistory, Link } from "react-router-dom";
// import "./style.css";
import {loginUser} from "../../../../Store/Auth/auth.actions";
import {useDispatch} from "react-redux";
const axios = require("axios");

const { Title } = Typography;


const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();


  const handleSubmit = (values) => {
    const data={
      Email: values.email,
      Password: values.password,
    }
    dispatch(loginUser(data, history))
  };
  return (
    <>
      {/* <img src={window.location.origin + '/wave.png'}/>      */}

      {/*<div class="container">*/}
      {/*  <div class="img">*/}
      {/*    <img src={window.location.origin + "/bg.svg"} />*/}
      {/*  </div>*/}
        <div   style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
          <noform className="box-shadow" style={{ width: 400, padding: 20 }}>
            <Card hoverable style={{ width: "500px" }}>
            <Title level={3}> Login</Title>
            <Form initialValues={{}} onFinish={handleSubmit}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input size="large" placeholder="Email Address" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password size="large" placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                >
                  <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "200px" }}
                  >
                    Login
                  </Button>
                </div>
              </Form.Item>
              <Form.Item>
                <Typography.Text>
                  Dont have account? <Link to="/signup">sign up</Link>
                </Typography.Text>
              </Form.Item>
            </Form>
            </Card>
            {/*<Link to="/signup">Register here</Link>*/}
          </noform>
        </div>
      {/*</div>*/}
    </>
  );
};

export default Login;
