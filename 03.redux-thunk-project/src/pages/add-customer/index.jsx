// import React from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
// import {POSTAddCustomersAction} from "../../redux/action/addcustomer"
// import { useDispatch } from 'react-redux';

// const AddCustomer = () => {
//     const [form] = Form.useForm();
//     const dispatch = useDispatch();
//     const onFinish = (values) => {
//       form.resetFields();
//       dispatch(POSTAddCustomersAction(values));
//     };
//     const onFinishFailed = (errorInfo) => {
//       console.log("Failed:", errorInfo);
//     };
  
//   return (

//     <Form
//       name="basic"
//       labelCol={{ span: 8 }}
//       wrapperCol={{ span: 16 }}
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="CompanyNameee"
//         name="CompanyNameeee"
//         rules={[{ required: true, message: 'Please input your CompanyName!' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="ContactTitle"
//         name="ContactTitle"
//         rules={[{ required: true, message: 'Please input your ContactTitle!' }]}
//       >
//         <Input.ContactTitle />
//       </Form.Item>

//       <Form.Item
//         label="Adress"
//         name="Adress"
//         rules={[{ required: true, message: 'Please input your Adress!' }]}
//       >
//         <Input.ContactTitle />
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//           Delete
//         </Button>
//       </Form.Item>
//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//           Add To Favorites
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default AddCustomer;
import React from "react";
import { Button, Form, Input } from "antd";
// import "./index.scss";
import { POSTAddCustomersAction } from "../../redux/action/addcustomer";
import { useDispatch } from "react-redux";

const AddCustomer = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    form.resetFields();
    dispatch(POSTAddCustomersAction(values));
   
  };
 

  return (
  
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
       
        autoComplete="off"
      >
        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[
            {
              required: true,
              message: "please write company name!",
            },
          ]}
        >
          <Input placeholder="contact name" />
        </Form.Item>

        <Form.Item
          label="Contact Title"
          name="contactTitle"
          rules={[
            {
              required: true,
              message: "please write contact title!",
            },
          ]}
        >
          <Input placeholder="contact title" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "please write addrres!",
            },
          ]}
        >
          <Input placeholder="address(country, city)" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add Customer
          </Button>
        </Form.Item>
      </Form>
    
  );
};

export default AddCustomer;