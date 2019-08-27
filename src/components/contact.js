import React from "react"

import { Modal, Button, Form, Input, Divider, Radio, DatePicker, InputNumber, Select } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {

    state = {
      enterprise: false,
      hidden : true,
      require: false
    }

    onChange = e => {
      this.setState({
        enterprise: e.target.value,
      })
      if (this.state.enterprise === true) {
        this.setState({hidden: true})
        this.setState({require: false})
      } else {
        this.setState({hidden: false})
        this.setState({require: true})
      }
    }


    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { RangePicker } = DatePicker;
      const { Option } = Select;
      const { getFieldDecorator } = form;
      const rangeConfig = {
        rules: [{ type: 'array', required: true, message: "Merci de sélectionner les dates de l'évènement !"}],
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '33',
      })(
        <Select style={{ width: 70 }}>
          <Option value="33">+33</Option>
          <Option value="41">+41</Option>
          <Option value="377">+377</Option>
        </Select>,
      );
      return (
        <Modal
          visible={visible}
          title="Parlez-nous de votre évènement"
          okText="Envoyer"
          cancelText="Annuler"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical" data-netlify="true" netlify-honeypot="bot-field">
            <Form.Item>
              <Input type="hidden" name="bot-field"/>
            </Form.Item>
            <Form.Item label="Type d’évènement :" >
              {getFieldDecorator('Type', {
                rules: [{ required: true, message: "Merci d'indiquer le type d'événement !"}],
              })(<Input/>)}
            </Form.Item>
            <Form.Item label="Lieu :">
              {getFieldDecorator('Lieu', {
                rules: [{ required: true, message: "Merci d'indiquer le lieu de l'événement !"}],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Date">
              {getFieldDecorator('Dates', rangeConfig)(<RangePicker />)}
            </Form.Item>
            <Form.Item label="Nombre de personnes :">
              {getFieldDecorator('personnes', { initialValue: 1 })(<InputNumber min={1} max={100000} />)}
            </Form.Item>
            <Divider/>
            <Form.Item>
              {getFieldDecorator('modifier', {
                initialValue: this.state.enterprise,}
              )(
                <Radio.Group onChange={this.onChange}>
                  <Radio value={false}>Particulier</Radio>
                  <Radio value={true}>Entreprise</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
            <Divider/>
            <Form.Item label="Nom de l'entreprise :" >
              {getFieldDecorator('Entreprise', {
                rules: [{ required: this.state.require, message: "Merci d'indiquer le nom de votre entreprise !"}],
              })(<Input disabled={this.state.hidden}/>)}
            </Form.Item>
            <Form.Item label="Nom :">
              {getFieldDecorator('Nom', {
                rules: [{ required: true, message: "Merci d'indiquer votre nom !"}],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Prénom :">
              {getFieldDecorator('Prénom', {
                rules: [{ required: true, message: "Merci d'indiquer votre prénom !"}],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Fonction dans l'entreprise :" >
              {getFieldDecorator('Fonction', {
                rules: [{ required: false, message: "Merci d'indiquer votre fonction dans l'entreprise !"}],
              })(<Input disabled={this.state.hidden}/>)}
            </Form.Item>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Téléphone">
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: "Merci d'indiquer votre numéro de téléphone !" }],
              })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

export default class Contact extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
    console.log(this.state);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Demande de devis gratuit
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
