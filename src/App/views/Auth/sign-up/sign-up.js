import { Form, Input, Typography, Card, Button,Col, Row } from "antd";
import { useHistory, Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {signupUser} from "../../../../Store/Auth/auth.actions";

// import "./style.css";


const { Title } = Typography;


const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {

    console.log("Success:", values);

   const data={
     firstName: values.first_name,
     lastName: values.last_name,
     userName: values.UserName,
     email: values.email,
     password: values.password,
   }
    dispatch(signupUser(data, history))

  };
  return (
    <>
      {/* <img src={window.location.origin + '/wave.png'}/>      */}

      {/*<div class="container">*/}

      {/*  <div class="img">*/}
      {/*    <img src={window.location.origin + "/bg.svg"} />*/}
      {/*  </div>*/}

        <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
        >
          <Card hoverable style={{ width: "500px" }}>

            <Form initialValues={{}} onFinish={handleSubmit}>
            <Title level={4}>Create account</Title>

              {/*first & last name*/}
              <Form.Item  >
                <Input.Group >
                  <Row gutter={12}>
                    <Col span={12}>
                      <Form.Item rules={[{ required: true }]} name="first_name">
                        <Input size="large" rules={[{ required: true }]} placeholder="first name"  name="first_name" />
                      </Form.Item >
                    </Col>
                    <Col span={12}>
                      <Form.Item rules={[{ required: true }]} name="last_name">
                        <Input size="large" placeholder="last name" name="last_name" />
                      </Form.Item >
                    </Col>
                  </Row>
                </Input.Group>
              </Form.Item>


              <Form.Item
                  name="email"
                  rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input size="large" placeholder="Email" />
              </Form.Item>

              <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Please input your password!" }]}
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
                    Sign Up
                  </Button>
                </div>
              </Form.Item>
              <Form.Item>
                <Typography.Text>
                  Already have accout? <Link to="/login">Login</Link>
                </Typography.Text>
              </Form.Item>
            </Form>
          </Card>
        </div>



      {/*</div>*/}
    </>
  );
};

export default Signup;
