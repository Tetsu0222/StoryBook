
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

export const Default = () => 
    <Button>Default</Button>;

export const Primary = () =>
    <Button color="primary">Primaly</Button>

export const Danger = () =>
    <Button color="danger">Danger!!</Button>