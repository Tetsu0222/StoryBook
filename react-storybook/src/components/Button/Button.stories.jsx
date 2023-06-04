
import Button from '../Button/Button';


//argTypesによる設定
export default {
    title: 'Common/Test',
    component: Button,
    argTypes: {
      color: {
        options: ['primary', 'default', 'danger'],
        control: { type: 'radio' },
      },
      size: {
        options: ['sm', 'base', 'lg'],
        control: { type: 'radio' },
      },
      //背景色を追記、コントローラーでカラーピックが表示され、背景色を変更できる。
      backgroundColor:{
        control:{ type:'color' },
      },
    },
  };

export const HelloButton = () => 
    <Button>Hello World!</Button>;

export const ClickButton = () => 
    <Button>Click!</Button>;

const Template = ( args ) =>
    <Button { ...args } />;

export const Default = Template.bind( {} );
Default.args = {
    children:'Default',
};

export const Danger = Template.bind( {} );
Danger.args = {
    children: 'Danger',
    color: 'danger',
};

export const Primary = Template.bind( {} );
Primary.args = {
    children:'Primary',
    color:'primary',
};



export const PrimarySmall = Template.bind( {} );
PrimarySmall.args = {
    children: 'Small',
    color: 'primary',
    size:'sm',
};

export const PrimaryLarge = Template.bind( {} );
PrimaryLarge.args = {
    ...PrimarySmall.args,   //Spread Operatorを使用
    children: 'Large',
    size:'lg',
};