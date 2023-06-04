
import Button from '../Button/Button';

export default{
    title: 'Common/Button',
    component: Button,
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


//Argsの値は、他のストーリーで利用した値を利用することが可能
//以下は、PrimarySmallの値を利用したPrimaryLargeの例
//この2つはcolorが共通している。
export const PrimaryLarge = Template.bind( {} );
PrimaryLarge.args = {
    ...PrimarySmall.args,   //Spread Operatorを使用
    children: 'Large',
    size:'lg',
};

//共通していない箇所は、上記のように個別で記述
//他の共通部分は自動的に反映される。