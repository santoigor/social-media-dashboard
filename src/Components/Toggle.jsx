import styled from 'styled-components';
import { toggleBackgroundGray, toggleBackgroundGradient, grayText } from '../UI/Variables';

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
        background-color: ${toggleBackgroundGray};
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

        background-color: ${ ({isDark, theme })=> isDark ? theme.headerBackground : 'white'};
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background: ${toggleBackgroundGradient};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px  ${toggleBackgroundGradient};
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
    font-size: 12px;
    font-weight: 700;
    color: ${({isDark, theme}) => isDark ?  theme.primaryTextColor : grayText};
`;
export default ({isDark, ...rest}) => (
    <Toggle isDark={isDark}>
        <NumberFollowers isDark={isDark}>Dark mode</NumberFollowers>
        <label className="switch">
            <input type="checkbox" {...rest}/>
            <span className="slider round"></span>
        </label>
    </Toggle>
);