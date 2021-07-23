import styled from 'styled-components';

const Toggle = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    .switch {
        position: relative;
        display: inline-block;
        width: 45px;
        height: 20px;
    }

    // Para esconder o input padrão do HTML
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color:hsl(230, 22%, 74%);
        -webkit-trasition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        left: 2px;
        bottom: 3px;

        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background:  hsl(210, 78%, 56%);
        background: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    }

    input:focus + .slider {
        box-shadow: 0 0 1px linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

const NumberFollowers = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: hsl(228, 12%, 44%);
`;
export default () => (
    <Toggle>
        <NumberFollowers>Dark mode</NumberFollowers>
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
        </label>
    </Toggle>
);