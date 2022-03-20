import styled from "styled-components";

export const HeaderDiv = styled.header`
  width: 100%;
  height: 64px;
  display: flex;

  align-items: center;
  padding: 10px 36px;
  letter-spacing: 2px;

  margin-bottom: 20px;

  span {
    font-size: 16px;
  }

  .switch {
    margin-left: auto;
    position: relative;
    display: inline-block;
    width: 54px;
    height: 26px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #eee;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #eee;
  }

  input:checked + .slider:before {
    background-color: #333333;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

`;