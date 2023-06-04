
import Button from '../Button/Button';

export default{
    title: 'Common/Button',
    component: Button,
};

export const HelloButton = () => 
    <Button>Hello World!</Button>;

export const ClickButton = () => 
    <Button>Click!</Button>;



//Argsを使用しているストーリーは、ブラウザ上でコントローラーが使用できる。
//上記の2つのストーリーは、Argsを使用していないため、ブラウザでコントローラーの使用ができない。
//PropTypesによる設定をすれば、コントローラーやテキストを手動ではなくpropsで渡される型で設定できる。

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