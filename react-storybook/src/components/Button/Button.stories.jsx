
import Button from '../Button/Button';

//titleを変更
export default{
    title: 'Common/Button', //この記述によって、サイドメニューを階層化できる。
    component: Button,      //エラーが出ることがあるが、変更後の階層を選べばOK
};

export const HelloButton = () => 
    <Button>Hello World!</Button>;

export const ClickButton = () => 
    <Button>Click!</Button>;



//Argsの利用
//Template関数を定義する。
const Template = ( args ) =>    //argsはコンポーネントへ渡すprops
    <Button { ...args } />;

//ストーリーのDefault関数をTemplate関数でbindすることで新規の関数として作成する。
//作成後、argsを利用してpropsの値を設定する。
export const Default = Template.bind( {} );
Default.args = {
    children:'Default',
};

export const Danger = Template.bind( {} );
Danger.args = {
    children: 'Danger',
    color: 'danger',
};


//従来の記述に比べて、共通個所を割愛した記述ができるため簡略化することができる。
//渡すpropsが多くなったり、記述が複雑化している場合に有効
export const Primary = Template.bind( {} );
Primary.args = {
    children:'Primary',
    color:'primary',
};

/*前の記述
export const Primary = () =>
    <Button color="primary">Primary</Button>;
*/

export const PrimarySmall = Template.bind( {} );
PrimarySmall.args = {
    children: 'Small',
    color: 'primary',
    size:'sm',
};


export const PrimaryLarge = Template.bind( {} );
PrimaryLarge.args = {
    children: 'Large',
    color:'primary',
    size:'lg',
};

