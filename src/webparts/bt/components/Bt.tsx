import * as React from 'react';
import styles from "./Bt.module.scss";
import type { IBtProps } from './IBtProps';
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from 'axios';
import { ComboBoxVirtualizedExample2 } from './Comboboxs';
import { DefaultButton, Pivot, PivotItem } from '@fluentui/react';
import { MYModal } from './MYModal';
interface IPopupState {

  secilimasrafmerkeziList: Array<any>;
  secilibutcekoduList: Array<any>;
  secilibutcekoduList2: Array<any>;
  secilibutcekoduList3: Array<any>;
  secilibutcekoduList4: Array<any>;
  secilibutcekoduList5: Array<any>;
  secilibutcekoduList6: Array<any>;
  secilibutcekoduList7: Array<any>;
  secilibutcekoduList8: Array<any>;
  secilibutcekoduList9: Array<any>;
  secilibutcekoduList10: Array<any>;

  secilibutcekoduList11: Array<any>;

  aylar: Array<any>;


  transferEdenList: Array<any>;  
  transferEdenList2: Array<any>;
  transferEdenList3: Array<any>;
  transferEdenList4: Array<any>;
  transferEdenList5: Array<any>;
  transferEdilenList: Array<any>;
  transferEdilenList2: Array<any>;
  transferEdilenList3: Array<any>;
  transferEdilenList4: Array<any>;
  transferEdilenList5: Array<any>;

  transferEdilenList11: Array<any>;



  filteredmm: string;
  filteredbk: string;
  filtereday: string;
  filteredmm2: string;
  filteredbk2: string;
  filtereday2: string;
  filteredmm3: string;
  filteredbk3: string;
  filtereday3: string;
  filteredmm4: string;
  filteredbk4: string;
  filtereday4: string;
  filteredmm5: string;
  filteredbk5: string;
  filtereday5: string;
  filteredmm6: string;
  filteredbk6: string;
  filtereday6: string;
  filteredmm7: string;
  filteredbk7: string;
  filtereday7: string;
  filteredmm8: string;
  filteredbk8: string;
  filtereday8: string;
  filteredmm9: string;
  filteredbk9: string;
  filtereday9: string;
  filteredmm10: string;
  filteredbk10: string;
  filtereday10: string;
  filteredmm11: string;
  filteredbk11: string;
  filtereday11: string;

  callchildcomponent: boolean,
  isVisible: number;
  isVisible2: number;
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
  input6: string;
  input7: string;
  input8: string;
  input9: string;
  input10: string;
  input11: string;

  a: number;
  capexfiltresi: boolean;
}

export default class Bt extends React.Component<IBtProps, IPopupState, {}> {
  constructor(props: IBtProps, state: any) {
    super(props);

    this.state = {
      filteredmm: "",
      filteredbk: "",
      filtereday: "",
      filteredmm2: "",
      filteredbk2: "",
      filtereday2: "",
      filteredmm3: "",
      filteredbk3: "",
      filtereday3: "",
      filteredmm4: "",
      filteredbk4: "",
      filtereday4: "",
      filteredmm5: "",
      filteredbk5: "",
      filtereday5: "",
      filteredmm6: "",
      filteredbk6: "",
      filtereday6: "",
      filteredmm7: "",
      filteredbk7: "",
      filtereday7: "",
      filteredmm8: "",
      filteredbk8: "",
      filtereday8: "",
      filteredmm9: "",
      filteredbk9: "",
      filtereday9: "",
      filteredmm10: "",
      filteredbk10: "",
      filtereday10: "",
      filteredmm11: "", 
      filteredbk11: "",
      filtereday11: "",

      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: "",



      callchildcomponent: false,


      secilimasrafmerkeziList: [],
      secilibutcekoduList: [],
      secilibutcekoduList2: [],
      secilibutcekoduList3: [],
      secilibutcekoduList4: [], 
      secilibutcekoduList5: [],
      secilibutcekoduList6: [],
      secilibutcekoduList7: [],
      secilibutcekoduList8: [],
      secilibutcekoduList9: [],
      secilibutcekoduList10: [],

      secilibutcekoduList11: [],

      aylar: [
        { key: '1', text: '1' },
        { key: '2', text: '2' },
        { key: '3', text: '3' },
        { key: '4', text: '4' },
        { key: '5', text: '5' },
        { key: '6', text: '6' },
        { key: '7', text: '7' },
        { key: '8', text: '8' },
        { key: '9', text: '9' },
        { key: '10', text: '10' },
        { key: '11', text: '11' },
        { key: '12', text: '12' }
      ],


      transferEdenList: [],
      transferEdenList2: [],
      transferEdenList3: [],
      transferEdenList4: [],
      transferEdenList5: [],
      transferEdilenList: [],
      transferEdilenList2: [],
      transferEdilenList3: [],
      transferEdilenList4: [],
      transferEdilenList5: [],

      transferEdilenList11: [],

      isVisible: 1,
      isVisible2: 6,
      a: 0,
      capexfiltresi: false,

    };

    this.handler = this.handler.bind(this);
    this.Buttonclick = this.Buttonclick.bind(this);


  }
  handler() {
    this.setState({
      callchildcomponent: false,
    });
  };

  private Buttonclick(
    e: React.MouseEvent<
      | HTMLDivElement
      | HTMLAnchorElement
      | HTMLButtonElement
      | DefaultButton
      | HTMLSpanElement,
      MouseEvent
    >
  ) {
    e.preventDefault();
    this.setState({ callchildcomponent: true });
  }

  addRow = () => {
    if (this.state.isVisible >= 5) {
      this.setState({ isVisible: 5 })
    }
    else {
      this.setState(prevState => ({
        isVisible: prevState.isVisible + 1
      }));
    }
  };

  addRow2 = () => {
    if (this.state.isVisible2 >= 10) {
      this.setState({ isVisible2: 10 })
    }
    else {
      this.setState(prevState => ({
        isVisible2: prevState.isVisible2 + 1
      }));
    }
  };

  removeRow = () => {
    if (this.state.isVisible == 2) {
      this.setState(prevState => ({
        isVisible: prevState.isVisible - 1
      }));
      this.setState({ input2: "" });
      this.setState({ transferEdilenList2: [] });
    }
    else if (this.state.isVisible == 3) {
      this.setState(prevState => ({
        isVisible: prevState.isVisible - 1
      }));
      this.setState({ input3: "" });
      this.setState({ transferEdilenList3: [] });
    }
    else if (this.state.isVisible == 4) {
      this.setState(prevState => ({
        isVisible: prevState.isVisible - 1
      }));
      this.setState({ input4: "" });
      this.setState({ transferEdilenList4: [] });
    }
    else if (this.state.isVisible == 5) {
      this.setState(prevState => ({
        isVisible: prevState.isVisible - 1
      }));
      this.setState({ input5: "" });
      this.setState({ transferEdilenList5: [] });
    }


  };
  removeRow2 = () => {

    if (this.state.isVisible2 == 7) {
      this.setState(prevState => ({
        isVisible2: prevState.isVisible2 - 1
      }));
      this.setState({ input7: "" });
      this.setState({ transferEdenList2: [] });
    }
    else if (this.state.isVisible2 == 8) {
      this.setState(prevState => ({
        isVisible2: prevState.isVisible2 - 1
      }));
      this.setState({ input8: "" });
      this.setState({ transferEdenList3: [] });
    }
    else if (this.state.isVisible2 == 9) {
      this.setState(prevState => ({
        isVisible2: prevState.isVisible2 - 1
      }));
      this.setState({ input9: "" });
      this.setState({ transferEdenList4: [] });
    }
    else if (this.state.isVisible2 == 10) {
      this.setState(prevState => ({
        isVisible2: prevState.isVisible2 - 1
      }));
      this.setState({ input10: "" });
      this.setState({ transferEdenList5: [] });
    }






  };

  componentDidMount() {
    this.filtreleMasrafMerkezi();
  };

  filtreleMasrafMerkezi = async (): Promise<void> => {
    try {
      const response = await axios.get('https://satinalmaformu.com/masraffiltre');



      if (response.status === 200) {
        const responseJSON = response.data;

        //----------

        const excludedValues = ['Mağaza', 'B2C - İnternet', "Mimarlık"]
        const a = responseJSON
          .filter((item: any) =>
            excludedValues.includes(item.Mm_Control)
          );

        const capex = a.map((item: any, index: number) => ({
          key: index,
          text: item.Mm_Control,
        }));


        //----------

        const opex = responseJSON.map((item: any, index: number) => ({
          key: index,
          text: item.Mm_Control,
        }));



        if (this.state.capexfiltresi === false) {
          this.setState({ secilimasrafmerkeziList: opex });
        }
        else {
          this.setState({ secilimasrafmerkeziList: capex });
        }



      } else {
        console.error(response.data);
        alert(`Bir terslik var.`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  filtreleButce = async (): Promise<void> => {
    try {
      const response = await axios.get('https://satinalmaformu.com/masrafbutce');

      if (response.status === 200) {
        const responseJSON = response.data;

        const excludedValues = ['202 E-comm Capex                                                                                    ', '200 Mağaza Capex                                                                                    '];


        const filtered = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered2 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm2 && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered3 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm3 && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered4 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm4 && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered5 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm5 && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered6 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm6 && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered7 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm7 && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered8 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm8 && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered9 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm9 && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered10 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm10 && (this.state.capexfiltresi === true ? excludedValues.includes(item.Butce_Kodu) : !excludedValues.includes(item.Butce_Kodu))
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        const filtered11 = responseJSON
          .filter((item: any) =>
            item.Mm_Control === this.state.filteredmm11
          )
          .map((item: any, index: number) => ({
            key: index,
            text: item.Butce_Kodu
          }));

        this.setState({ secilibutcekoduList: filtered });
        this.setState({ secilibutcekoduList2: filtered2 });
        this.setState({ secilibutcekoduList3: filtered3 });
        this.setState({ secilibutcekoduList4: filtered4 });
        this.setState({ secilibutcekoduList5: filtered5 });
        this.setState({ secilibutcekoduList6: filtered6 });
        this.setState({ secilibutcekoduList7: filtered7 });
        this.setState({ secilibutcekoduList8: filtered8 });
        this.setState({ secilibutcekoduList9: filtered9 });
        this.setState({ secilibutcekoduList10: filtered10 });
        this.setState({ secilibutcekoduList11: filtered11 });
      } else {
        console.error(response.data);
        alert(`Bir terslik var.`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  getMasrafMerkezi2 = async (): Promise<void> => {
    try {
      const response = await axios.get('https://satinalmaformu.com/masrafmerkezi');

      if (response.status === 200) {
        const responseJSON = response.data;


        const updatedList = responseJSON.map((item: any) => ({
          id: item.İd,
          ay: item.Ay,
          yil: item.Yil,
          altkod: item.Mm_Alt_Kod,
          ustkod: item.Mm_Ust_Kod,
          description: item.Mm_Description,
          control: item.Mm_Control,
          tutar: item.Tutar,
          butcekodu: item.Butce_Kodu,
        }));



        const filteredList = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm &&
            item.butcekodu === this.state.filteredbk &&
            item.ay === this.state.filtereday
          );
        });
        const filteredList2 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm2 &&
            item.butcekodu === this.state.filteredbk2 &&
            item.ay === this.state.filtereday2
          );
        });
        const filteredList3 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm3 &&
            item.butcekodu === this.state.filteredbk3 &&
            item.ay === this.state.filtereday3
          );
        });
        const filteredList4 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm4 &&
            item.butcekodu === this.state.filteredbk4 &&
            item.ay === this.state.filtereday4
          );
        });
        const filteredList5 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm5 &&
            item.butcekodu === this.state.filteredbk5 &&
            item.ay === this.state.filtereday5
          );
        });
        const filteredList6 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm6 &&
            item.butcekodu === this.state.filteredbk6 &&
            item.ay === this.state.filtereday6
          );
        });
        const filteredList7 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm7 &&
            item.butcekodu === this.state.filteredbk7 &&
            item.ay === this.state.filtereday7
          );
        });
        const filteredList8 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm8 &&
            item.butcekodu === this.state.filteredbk8 &&
            item.ay === this.state.filtereday8
          );
        });
        const filteredList9 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm9 &&
            item.butcekodu === this.state.filteredbk9 &&
            item.ay === this.state.filtereday9
          );
        });
        const filteredList10 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm10 &&
            item.butcekodu === this.state.filteredbk10 &&
            item.ay === this.state.filtereday10
          );
        });
        const filteredList11 = updatedList.filter((item: { control: any; butcekodu: any; ay: any }) => {

          return (
            item.control === this.state.filteredmm11 &&
            item.butcekodu === this.state.filteredbk11 &&
            item.ay === this.state.filtereday11
          );
        });


        this.setState({ transferEdilenList: filteredList });
        this.setState({ transferEdilenList2: filteredList2 });
        this.setState({ transferEdilenList3: filteredList3 });
        this.setState({ transferEdilenList4: filteredList4 });
        this.setState({ transferEdilenList5: filteredList5 });

        this.setState({ transferEdenList: filteredList6 });
        this.setState({ transferEdenList2: filteredList7 });
        this.setState({ transferEdenList3: filteredList8 });
        this.setState({ transferEdenList4: filteredList9 });
        this.setState({ transferEdenList5: filteredList10 });

        this.setState({ transferEdilenList11: filteredList11 });


      } else {
        console.error(response.data);
        alert(`Bir terslik var.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleSelectedMasrafMerkeziChange = (value: string) => {
    const inputElement = document.getElementById("input1") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm: value }, () => {
      this.setState({ input1: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };

  handleSelectedButceKoduChange = (value: string) => {
    const inputElement = document.getElementById("input1") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk: value }, () => {
      this.setState({ input1: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };

  handleAyChange = (value: string) => {
    const inputElement = document.getElementById("input1") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday: value }, () => {
      this.setState({ input1: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };

  handleSelectedMasrafMerkeziChange2 = (value: string) => {
    const inputElement = document.getElementById("input2") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm2: value }, () => {
      this.setState({ input2: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };

  handleSelectedButceKoduChange2 = (value: string) => {
    const inputElement = document.getElementById("input2") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk2: value }, () => {
      this.setState({ input2: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };

  handleAyChange2 = (value: string) => {
    const inputElement = document.getElementById("input2") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday2: value }, () => {
      this.setState({ input2: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };

  handleSelectedMasrafMerkeziChange3 = (value: string) => {
    const inputElement = document.getElementById("input3") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm3: value }, () => {
      this.setState({ input3: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };
  handleSelectedButceKoduChange3 = (value: string) => {
    const inputElement = document.getElementById("input3") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk3: value }, () => {
      this.setState({ input3: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };
  handleAyChange3 = (value: string) => {
    const inputElement = document.getElementById("input3") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday3: value }, () => {
      this.setState({ input3: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };
  handleSelectedMasrafMerkeziChange4 = (value: string) => {
    const inputElement = document.getElementById("input4") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm4: value }, () => {
      this.setState({ input4: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };
  handleSelectedButceKoduChange4 = (value: string) => {
    const inputElement = document.getElementById("input4") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk4: value }, () => {
      this.setState({ input4: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };
  handleAyChange4 = (value: string) => {
    const inputElement = document.getElementById("input4") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday4: value }, () => {
      this.setState({ input4: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };
  handleSelectedMasrafMerkeziChange5 = (value: string) => {
    const inputElement = document.getElementById("input5") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm5: value }, () => {
      this.setState({ input5: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };
  handleSelectedButceKoduChange5 = (value: string) => {
    const inputElement = document.getElementById("input5") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk5: value }, () => {
      this.setState({ input5: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };
  handleAyChange5 = (value: string) => {
    const inputElement = document.getElementById("input5") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday5: value }, () => {
      this.setState({ input5: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };
  handleSelectedMasrafMerkeziChange6 = (value: string) => {
    const inputElement = document.getElementById("input6") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm6: value }, () => {
      this.setState({ input6: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };
  handleSelectedButceKoduChange6 = (value: string) => {
    const inputElement = document.getElementById("input6") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk6: value }, () => {
      this.setState({ input6: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };
  handleAyChange6 = (value: string) => {
    const inputElement = document.getElementById("input6") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday6: value }, () => {
      this.setState({ input6: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };
  handleSelectedMasrafMerkeziChange7 = (value: string) => {
    const inputElement = document.getElementById("input7") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm7: value }, () => {
      this.setState({ input7: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };
  handleSelectedButceKoduChange7 = (value: string) => {
    const inputElement = document.getElementById("input7") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk7: value }, () => {
      this.setState({ input7: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };
  handleAyChange7 = (value: string) => {
    const inputElement = document.getElementById("input7") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday7: value }, () => {
      this.setState({ input7: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };
  handleSelectedMasrafMerkeziChange8 = (value: string) => {
    const inputElement = document.getElementById("input8") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm8: value }, () => {
      this.setState({ input8: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };
  handleSelectedButceKoduChange8 = (value: string) => {
    const inputElement = document.getElementById("input8") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk8: value }, () => {
      this.setState({ input8: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };
  handleAyChange8 = (value: string) => {
    const inputElement = document.getElementById("input8") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday8: value }, () => {
      this.setState({ input8: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };
  handleSelectedMasrafMerkeziChange9 = (value: string) => {
    const inputElement = document.getElementById("input9") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm9: value }, () => {
      this.setState({ input9: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };
  handleSelectedButceKoduChange9 = (value: string) => {
    const inputElement = document.getElementById("input9") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk9: value }, () => {
      this.setState({ input9: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };
  handleAyChange9 = (value: string) => {
    const inputElement = document.getElementById("input9") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday9: value }, () => {
      this.setState({ input9: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };
  handleSelectedMasrafMerkeziChange10 = (value: string) => {
    const inputElement = document.getElementById("input10") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredmm10: value }, () => {
      this.setState({ input10: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();


  };
  handleSelectedButceKoduChange10 = (value: string) => {
    const inputElement = document.getElementById("input10") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filteredbk10: value }, () => {
      this.setState({ input10: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();
  };
  handleAyChange10 = (value: string) => {
    const inputElement = document.getElementById("input10") as HTMLInputElement;
    this.filtreleButce();
    this.setState({ filtereday10: value }, () => {
      this.setState({ input10: "" });
      inputElement.value = "";
    });
    this.getMasrafMerkezi2();

  };
  //ekbutce
  handleSelectedMasrafMerkeziChange11 = (value: string) => {
    this.filtreleButce();
    this.setState({ filteredmm11: value }, () => {

    });
    this.getMasrafMerkezi2();


  };
  handleSelectedButceKoduChange11 = (value: string) => {
    this.filtreleButce();
    this.setState({ filteredbk11: value }, () => {

    });
    this.getMasrafMerkezi2();
  };
  handleAyChange11 = (value: string) => {
    this.filtreleButce();
    this.setState({ filtereday11: value }, () => {

    });
    this.getMasrafMerkezi2();

  };


  transferPDF = (): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const input = document.getElementById("butcetransferekrani");

      if (!input) {
        console.error('Element  not found');
        reject("Element not found");
        return;
      }

      const textareas = input.querySelectorAll("textarea");

      // Textareaları dönerek içeriği <p> elementine dönüştür
      textareas.forEach(textarea => {
        if (textarea.parentNode) {
          const pElement = document.createElement("p");
          pElement.textContent = textarea.value;

          // Yaratılan <p> elementine bir class ekleyin
          pElement.className = 'customp'  // Örneğin, "custom-class" adında bir class ekleyelim

          textarea.parentNode.replaceChild(pElement, textarea);
        }
      });

      html2canvas(input, { logging: true, useCORS: true, scale: 2 }).then(
        (canvas) => {
          const imgWidth = 200;

          // İlk sayfanın yüksekliğini elemanın yüksekliğine ayarlayın
          const imgHeight1 = (input.offsetHeight * (imgWidth / input.offsetWidth)) + 10;


          const pdf = new jsPDF("p", "mm", "a4");

          // İlk sayfayı ekleyin
          const x1 = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;

          pdf.addImage(
            canvas.toDataURL("image/jpeg", 0.7),
            "JPEG",
            x1,
            0,
            imgWidth,
            imgHeight1
          );

          const pdfBlob = pdf.output("blob");
          resolve(pdfBlob);
          const pdfFileName = "talep.pdf";
          pdf.save(pdfFileName);
        }
      );
    });
  };
  ekbutcePDF = (): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const input = document.getElementById("ekbutceekrani");

      if (!input) {
        console.error('Element  not found');
        reject("Element not found");
        return;
      }

      const textareas = input.querySelectorAll("textarea");

      // Textareaları dönerek içeriği <p> elementine dönüştür
      textareas.forEach(textarea => {
        if (textarea.parentNode) {
          const pElement = document.createElement("p");
          pElement.textContent = textarea.value;

          // Yaratılan <p> elementine bir class ekleyin
          pElement.className = 'customp'  // Örneğin, "custom-class" adında bir class ekleyelim

          textarea.parentNode.replaceChild(pElement, textarea);
        }
      });

      html2canvas(input, { logging: true, useCORS: true, scale: 2 }).then(
        (canvas) => {
          const imgWidth = 200;

          // İlk sayfanın yüksekliğini elemanın yüksekliğine ayarlayın
          const imgHeight1 = (input.offsetHeight * (imgWidth / input.offsetWidth)) + 10;


          const pdf = new jsPDF("p", "mm", "a4");

          // İlk sayfayı ekleyin
          const x1 = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;

          pdf.addImage(
            canvas.toDataURL("image/jpeg", 0.7),
            "JPEG",
            x1,
            0,
            imgWidth,
            imgHeight1
          );

          const pdfBlob = pdf.output("blob");
          resolve(pdfBlob);
          const pdfFileName = "talep.pdf";
          pdf.save(pdfFileName);
        }
      );
    });


  };
  addAttachment = async (itemId: number): Promise<void> => {
    try {
      // PDF içeriğini al
      const pdfBlob = await this.transferPDF();

      // Blob'ı bir ek olarak yükle
      const fileName = "transferformu.pdf";
      const response = await this.props.context.spHttpClient.post(
        `${this.props.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('butcetransferkayitlari')/items(${itemId})/AttachmentFiles/add(FileName='${fileName}')`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            Accept: "application/json;odata=nometadata",
            "Content-type": "application/json;odata=nometadata",
            "odata-version": "",
          },
          body: pdfBlob,
        }
      );

      if (response.ok) {
        console.log("Ek başarıyla eklendi");
      } else {
        console.error("Ek eklenirken hata oluştu");
      }
    } catch (error) {
      console.error(error);
    }
  };
  addAttachment2 = async (itemId: number): Promise<void> => {
    try {
      // PDF içeriğini al
      const pdfBlob = await this.ekbutcePDF();

      // Blob'ı bir ek olarak yükle
      const fileName = "ekbutceformu.pdf";
      const response = await this.props.context.spHttpClient.post(
        `${this.props.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('ekbutcekayitlari')/items(${itemId})/AttachmentFiles/add(FileName='${fileName}')`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            Accept: "application/json;odata=nometadata",
            "Content-type": "application/json;odata=nometadata",
            "odata-version": "",
          },
          body: pdfBlob,
        }
      );

      if (response.ok) {
        console.log("Ek başarıyla eklendi");
      } else {
        console.error("Ek eklenirken hata oluştu");
      }
    } catch (error) {
      console.error(error);
    }
  };
  private gonderEkbutce = (): void => {

    const body: string = JSON.stringify({
      Title: "Ek Bütçe Talebi",
      masrafmerkeziid: (this.state.transferEdilenList11[0].id.toString()),
      masrafmerkeziay: this.state.transferEdilenList11[0].ay,
      masrafmerkeziyil: this.state.transferEdilenList11[0].yil,
      masrafmerkezialtkod: this.state.transferEdilenList11[0].altkod,
      masrafmerkeziustkod: this.state.transferEdilenList11[0].ustkod,
      masrafmerkezidescription: this.state.transferEdilenList11[0].description,
      masrafmerkezikontrol: this.state.transferEdilenList11[0].control,
      masrafmerkezibutcekodu: this.state.transferEdilenList11[0].butcekodu,

      mevcuttutar: (
        document.getElementById("ekbutcemevcuttutar") as HTMLInputElement
      )["value"],
      istenentutar: (
        document.getElementById("ekbutceistenen") as HTMLInputElement
      )["value"],
      yenitutar: (
        document.getElementById("ekbutceyeni") as HTMLInputElement
      )["value"],
      aciklama: (document.getElementById("aciklamatextarea2") as HTMLTextAreaElement)["value"],

    });
    this.props.context.spHttpClient
      .post(
        `${this.props.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('ekbutcekayitlari')/items`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            Accept: "application/json;odata=nometadata",
            "Content-type": "application/json;odata=nometadata",
            "odata-version": "",
          },
          body: body,
        }
      )
      .then((response: SPHttpClientResponse) => {
        if (response.ok) {
          response.json().then((responseJSON) => {
            const newItemId: number = responseJSON.Id;

            // Yeni oluşturulan öğeye ek dosya ekleyin
            this.addAttachment2(newItemId);




          });
        } else {
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  private gonderTransfer = (): void => {
    if (this.state.secilibutcekoduList) {

    }

    var tumliste = [
      ...this.state.transferEdilenList,
      ...this.state.transferEdilenList2,
      ...this.state.transferEdilenList3,
      ...this.state.transferEdilenList4,
      ...this.state.transferEdilenList5,
      ...this.state.transferEdenList,
      ...this.state.transferEdenList2,
      ...this.state.transferEdenList3,
      ...this.state.transferEdenList4,
      ...this.state.transferEdenList5,
    ]
    var transferedilenlistesi = [
      ...this.state.transferEdilenList,
      ...this.state.transferEdilenList2,
      ...this.state.transferEdilenList3,
      ...this.state.transferEdilenList4,
      ...this.state.transferEdilenList5,

    ];
    var transferedenlistesi = [
      ...this.state.transferEdenList,
      ...this.state.transferEdenList2,
      ...this.state.transferEdenList3,
      ...this.state.transferEdenList4,
      ...this.state.transferEdenList5,
    ];

    var transferedilengirilendegerlerlistesi = [
      this.state.input1,
      this.state.input2,
      this.state.input3,
      this.state.input4,
      this.state.input5,
    ];
    var transferedengirilendegerlerlistesi = [
      this.state.input6,
      this.state.input7,
      this.state.input8,
      this.state.input9,
      this.state.input10,
    ];

    const uniqueValues: string[] = [];
    tumliste.map(item => item.control.toString()).forEach(item => {
      if (!uniqueValues.includes(item)) {
        uniqueValues.push(item);
      }
    });




    const a = (transferedilenlistesi.map(item => item.id.toString()).join(' | '));
    const b = (transferedilenlistesi.map(item => item.tutar.toString()).join(' | '));
    const c = transferedilengirilendegerlerlistesi.filter(deger => deger !== '').join(" | ");

    const d = (transferedenlistesi.map(item => item.id.toString()).join(' | '));
    const e = (transferedenlistesi.map(item => item.tutar.toString()).join(' | '));
    const f = transferedengirilendegerlerlistesi.filter(deger => deger !== '').join(" | ");



    const body: string = JSON.stringify({

      Title: "Bütçe Transfer Talebi",
      transferedilenid: a,
      transferedilenanliktutar: b,
      transferedilengirilentutar: c,
      transferedenid: d,
      transferedenanliktutar: e,
      transferedengirilentutar: f,
      etkilenendepartmanlar: uniqueValues.join('|'),
      aciklama: (document.getElementById("aciklamatextarea") as HTMLTextAreaElement)[
        "value"
      ],






    });
    this.props.context.spHttpClient
      .post(
        `${this.props.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('butcetransferkayitlari')/items`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            Accept: "application/json;odata=nometadata",
            "Content-type": "application/json;odata=nometadata",
            "odata-version": "",
          },
          body: body,
        }
      )
      .then((response: SPHttpClientResponse) => {
        if (response.ok) {
          response.json().then((responseJSON) => {
            const newItemId: number = responseJSON.Id;

            // Yeni oluşturulan öğeye ek dosya ekleyin
            this.addAttachment(newItemId);


          });
        } else {
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  topla = (callback: () => void) => {
    const transferedenlerinput = [
      parseFloat((this.state.input6).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input7).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input8).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input9).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input10).replace(/\./g, '').replace(',', '.')) || 0,
    ];


    const transferedenmevcuttoplam = transferedenlerinput.reduce((accumulator, currentValue) => {
      return (accumulator + currentValue);
    }, 0);


    this.setState({ a: transferedenmevcuttoplam }, callback);


  };
  control = () => {
    const a = (document.getElementById("tedenvalue") as HTMLInputElement)["value"];
    const b = (document.getElementById("tedilenvalue") as HTMLInputElement)["value"];
    const c = (document.getElementById("aciklamatextarea") as HTMLInputElement)["value"];

    if (a != b) {
      alert("kullanılacak bütçe tutarı ve eklenecek tutar alanlarının dip toplamları birbirine eşit olmalıdır lütfen kontrol sağlayınız");
    }
    else if (a === "0" && b === "0") {
      alert("Lütfen değerleri doldurunuz.");
    }

    else if (c === "") {
      alert("Lütfen açıklama bölümünü doldurunuz.");
    }
    else {
      this.gonderTransfer();
      alert("Form başarıyla onaya gönderildi,Sayfa 5 saniye içerisinde yenilenecektir.");
      setTimeout(function () {
        // Sayfayı yenile
        window.location.reload();
      }, 5000);

    }
  }

  control2 = () => {
    const a = (document.getElementById("ekbutceistenen") as HTMLInputElement)["value"];
    const c = (document.getElementById("aciklamatextarea2") as HTMLTextAreaElement)["value"];

    if (a == "") {
      alert("Lütfen eklemek stediğiniz tutarı giriniz.")
    }
    else if (c == "") {
      alert("Lütfen açıklama bölümünü doldurunuz.")
    }
    else {
      this.gonderEkbutce();

      alert("Form başarıyla onaya gönderildi,Sayfa 5 saniye içerisinde yenilenecektir.")

      setTimeout(function () {
        // Sayfayı yenile
        window.location.reload();
      }, 5000);
    }



  };


  opexcapex = () => {
    // capexfiltresi state'ini toggle edin
    this.setState(prevState => ({
      capexfiltresi: !prevState.capexfiltresi,

      filteredmm: "",
      filteredbk: "",
      filtereday: "",
      filteredmm2: "",
      filteredbk2: "",
      filtereday2: "",
      filteredmm3: "",
      filteredbk3: "",
      filtereday3: "",
      filteredmm4: "",
      filteredbk4: "",
      filtereday4: "",
      filteredmm5: "",
      filteredbk5: "",
      filtereday5: "",
      filteredmm6: "",
      filteredbk6: "",
      filtereday6: "",
      filteredmm7: "",
      filteredbk7: "",
      filtereday7: "",
      filteredmm8: "",
      filteredbk8: "",
      filtereday8: "",
      filteredmm9: "",
      filteredbk9: "",
      filtereday9: "",
      filteredmm10: "",
      filteredbk10: "",
      filtereday10: "",
      filteredmm11: "",
      filteredbk11: "",
      filtereday11: "",

      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "", 
      input6: "",
      input7: "",  
      input8: "",
      input9: "",
      input10: "",
      input11: "",

      transferEdenList: [],
      transferEdenList2: [],
      transferEdenList3: [],
      transferEdenList4: [],
      transferEdenList5: [],
      transferEdilenList: [],
      transferEdilenList2: [],
      transferEdilenList3: [],
      transferEdilenList4: [],
      transferEdilenList5: [], 

      transferEdilenList11: [],


    }), () => {
      console.log(this.state.filteredmm)
      console.log(this.state.filteredbk)
      console.log(this.state.filtereday)
      console.log(this.state.input1)

      this.filtreleMasrafMerkezi();
    });
  };






  public render(): React.ReactElement<IBtProps> {
    //ek bütçe
    const aratoplam = this.state.transferEdilenList11.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))) || 0;
    const ekbutce = parseFloat((this.state.input11).replace(/\./g, '').replace(',', '.')) || 0;
    const toplam = aratoplam.reduce((acc, curr) => acc + curr, 0);
    const ekbutceson = toplam + ekbutce;


    //transfer

    const transferedilenlertutar = [
      ...this.state.transferEdilenList.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),
      ...this.state.transferEdilenList2.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),
      ...this.state.transferEdilenList3.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),
      ...this.state.transferEdilenList4.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),
      ...this.state.transferEdilenList5.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),

    ];

    const transferedenlertutar = [
      ...this.state.transferEdenList.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),
      ...this.state.transferEdenList2.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),
      ...this.state.transferEdenList3.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),
      ...this.state.transferEdenList4.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),
      ...this.state.transferEdenList5.map(item => parseFloat(item.tutar.replace(/\./g, '').replace(',', '.'))),
    ];

    //input

    const transferedilenlerinput = [
      parseFloat((this.state.input1).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input2).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input3).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input4).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input5).replace(/\./g, '').replace(',', '.')) || 0,
    ];

    const transferedenlerinput = [
      parseFloat((this.state.input6).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input7).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input8).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input9).replace(/\./g, '').replace(',', '.')) || 0,
      parseFloat((this.state.input10).replace(/\./g, '').replace(',', '.')) || 0,
    ];


    const tedilentutar = transferedilenlertutar.reduce((accumulator, currentValue) => {
      return (accumulator + currentValue);
    }, 0);
    const tedentutar = transferedenlertutar.reduce((accumulator, currentValue) => {
      return (accumulator + currentValue);
    }, 0);

    const transferedilenmevcuttoplam = transferedilenlerinput.reduce((accumulator, currentValue) => {
      return (accumulator + currentValue);
    }, 0);

    const transferedenmevcuttoplam = transferedenlerinput.reduce((accumulator, currentValue) => {
      return (accumulator + currentValue);
    }, 0);
    const { capexfiltresi } = this.state;
    const a =  "Capex bütçesinden aktarım yapmak istiyorsanız butona tıklayın";
    const b = "Capex bütçesi filtrelendi";





    return (
      <div>
        <DefaultButton
          onClick={(e) => this.Buttonclick(e)} 
          text="Bütçe işlemleri için tıklayınız"
          className={styles.customGirisButton}
        />
        {this.state.callchildcomponent && (
          <MYModal handler={() => this.setState({ callchildcomponent: false })}>
            <Pivot aria-label="Basic Pivot Example">
              <PivotItem
                headerText="Bütçe Transfer Formu"
                headerButtonProps={{
                  'data-order': 1,
                  'data-title': 'My Files Title',
                }}
              >
                <div className={styles.container2}>
                  <table className={styles.table}>
                    <tbody>
                      <tr>
                        <td colSpan={4}>
                          <div className={styles.fieldLabel2}> 
                            {capexfiltresi ? b : a} 
                          </div>
                        </td>
                        <th colSpan={1}>
                          <button
                            className={`${styles.customToggleButton} ${capexfiltresi ? styles.on : styles.off}`}
                            onClick={this.opexcapex} 
                          ></button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  <br></br>
                </div>
                <div className={styles.container} id='butcetransferekrani'>

                  <table className={styles.table} id='header1'>
                    <thead>
                      <th colSpan={5} className={styles.th} >
                      Bütçe Transfer Formu </th>
                    </thead>
                  </table>

                  <table className={styles.table} id='transfereden'>

                    <tbody>
                      <th colSpan={3} className={styles.th2} >Bütçe Veren </th>
                      <th colSpan={2}>
                        <button className={styles.customAddButton} onClick={this.addRow}>Satır Ekle</button>

                        <button className={styles.customDeleteButton} onClick={this.removeRow}>Satır Sil</button>
                      </th>



                      <tr>
                        <td>
                          <div className={styles.fieldLabel}>
                            Masraf Merkezi Tanımı Seçin:
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Bütçe Tanımı Seçin :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Ay Seçin :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Mevcut bütçe tutarı :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Kullanılacak bütçe tutarı :
                          </div>
                        </td>


                      </tr>


                      {this.state.isVisible >= 1 && (

                        <tr className={styles.tarow2} id='1'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange
                              }
                            />
                          </td>
                          <td >
                            <input className={styles.input}
                              value={this.state.transferEdilenList.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input
                              className={styles.input}
                              id='input1'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));
                                const maxAllowedValue = this.state.transferEdilenList.reduce((acc, item) => acc + item.tutar, 0);
                                const a = parseFloat(maxAllowedValue.replace(/\./g, '').replace(',', '.'));
                               
                                if (newValue <= a) {
                                  // Eğer girilen değer izin verilen maksimum değeri aşıyorsa, eski değeri geri yükle
                                  this.setState({ input1: (newValue.toLocaleString("tr-TR")) })
                                } else {
                                  // Aşılmamışsa, yeni değeri state'e kaydet  
                                  e.target.value = '';
                                  this.setState({ input1: '0' })
                                }
                              }

                              }
                            />
                          </td>

                        </tr>

                      )}
                      {this.state.isVisible >= 2 && (

                        <tr className={styles.tarow2} id='2'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange2
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList2}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange2
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange2
                              }
                            />
                          </td>
                          <td  >
                            <input className={styles.input}
                              value={this.state.transferEdilenList2.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input
                              className={styles.input}
                              id='input2'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));

                                const maxAllowedValue = this.state.transferEdilenList2.reduce((acc, item) => acc + item.tutar, 0);

                                const a = parseFloat(maxAllowedValue.replace(/\./g, '').replace(',', '.'));

                                if (newValue <= a) {
                                  // Eğer girilen değer izin verilen maksimum değeri aşıyorsa, eski değeri geri yükle
                                  this.setState({ input2: (newValue.toLocaleString("tr-TR")) })
                                } else {
                                  // Aşılmamışsa, yeni değeri state'e kaydet
                                  e.target.value = '';
                                  this.setState({ input2: '0' })
                                }
                              }

                              }
                            />
                          </td>

                        </tr>

                      )}
                      {this.state.isVisible >= 3 && (

                        <tr className={styles.tarow2} id='3'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange3
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList3}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange3
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange3
                              }
                            />
                          </td>
                          <td  >
                            <input className={styles.input}
                              value={this.state.transferEdilenList3.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input
                              className={styles.input}
                              id='input3'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));

                                const maxAllowedValue = this.state.transferEdilenList3.reduce((acc, item) => acc + item.tutar, 0);

                                const a = parseFloat(maxAllowedValue.replace(/\./g, '').replace(',', '.'));

                                if (newValue <= a) {
                                  // Eğer girilen değer izin verilen maksimum değeri aşıyorsa, eski değeri geri yükle
                                  this.setState({ input3: (newValue.toLocaleString("tr-TR")) })
                                } else {
                                  // Aşılmamışsa, yeni değeri state'e kaydet
                                  e.target.value = '';
                                  this.setState({ input3: '0' })
                                }
                              }

                              }
                            />
                          </td>

                        </tr>

                      )}
                      {this.state.isVisible >= 4 && (

                        <tr className={styles.tarow2} id='4'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange4
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList4}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange4
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange4
                              }
                            />
                          </td>
                          <td  >
                            <input className={styles.input}
                              value={this.state.transferEdilenList4.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input
                              className={styles.input}
                              id='input4'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));

                                const maxAllowedValue = this.state.transferEdilenList4.reduce((acc, item) => acc + item.tutar, 0);

                                const a = parseFloat(maxAllowedValue.replace(/\./g, '').replace(',', '.'));

                                if (newValue <= a) {
                                  // Eğer girilen değer izin verilen maksimum değeri aşıyorsa, eski değeri geri yükle
                                  this.setState({ input4: (newValue.toLocaleString("tr-TR")) })
                                } else {
                                  // Aşılmamışsa, yeni değeri state'e kaydet
                                  e.target.value = '';
                                  this.setState({ input4: '0' })
                                }
                              }

                              }
                            />
                          </td>

                        </tr>

                      )}
                      {this.state.isVisible >= 5 && (

                        <tr className={styles.tarow2} id='5'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange5
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList5}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange5
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange5
                              }
                            />
                          </td>
                          <td  >
                            <input className={styles.input}
                              value={this.state.transferEdilenList5.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input
                              className={styles.input}
                              id='input5'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));

                                const maxAllowedValue = this.state.transferEdilenList5.reduce((acc, item) => acc + item.tutar, 0);

                                const a = parseFloat(maxAllowedValue.replace(/\./g, '').replace(',', '.'));

                                if (newValue <= a) {
                                  // Eğer girilen değer izin verilen maksimum değeri aşıyorsa, eski değeri geri yükle
                                  this.setState({ input5: (newValue.toLocaleString("tr-TR")) })
                                } else {
                                  // Aşılmamışsa, yeni değeri state'e kaydet
                                  e.target.value = '';
                                  this.setState({ input5: '0' })
                                }
                              }

                              }
                            />
                          </td>

                        </tr>

                      )}


                      <tr id='toplam'>
                        <td colSpan={3}>

                        </td>

                        <td>
                          <input className={styles.input} value={tedilentutar.toLocaleString("tr-TR")}>
                          </input>
                        </td>
                        <td>
                          <input id='tedilenvalue' className={styles.input} value={transferedilenmevcuttoplam.toLocaleString("tr-TR")} >
                          </input>
                        </td>
                      </tr>





                    </tbody>

                  </table>

                  <table className={styles.table} id='transferedilen'>

                    <tbody>
                      <th colSpan={3} className={styles.th2} >Bütçe Alan </th>
                      <th colSpan={2}>
                        <button className={styles.customAddButton} onClick={this.addRow2}>Satır Ekle</button>

                        <button className={styles.customDeleteButton} onClick={this.removeRow2}>Satır Sil</button>
                      </th>

                      <tr>
                        <td>
                          <div className={styles.fieldLabel}>
                            Masraf Merkezi Tanımı Seçin:
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Bütçe Tanımı Seçin :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Ay Seçin :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Mevcut bütçe tutarı :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Eklenecek tutar :
                          </div>
                        </td>


                      </tr>

                      {this.state.isVisible2 >= 6 && (

                        <tr className={styles.tarow2} id='6'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange6
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList6}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange6
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange6
                              }
                            />
                          </td>
                          <td  >
                            <input id='input6tutar' className={styles.input}
                              value={this.state.transferEdenList.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input className={styles.input}
                              id='input6'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));
                                this.setState({ input6: newValue.toLocaleString("tr-TR") }, () => {
                                  this.topla(() => {
                                    if (this.state.a > transferedilenmevcuttoplam) {
                                      e.target.value = '';
                                      this.setState({ input6: '' });
                                    };
                                  });
                                });
                              }}



                            />

                          </td>

                        </tr>

                      )}
                      {this.state.isVisible2 >= 7 && (

                        <tr className={styles.tarow2} id='7'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange7
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList7}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange7
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange7
                              }
                            />
                          </td>
                          <td  >
                            <input id='input7tutar' className={styles.input}
                              value={this.state.transferEdenList2.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input className={styles.input}
                              id='input7'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));
                                this.setState({ input7: newValue.toLocaleString("tr-TR") }, () => {
                                  this.topla(() => {
                                    if (this.state.a > transferedilenmevcuttoplam) {
                                      e.target.value = '';
                                      this.setState({ input7: '' });
                                    };
                                  });
                                });
                              }}
                            />
                          </td>

                        </tr>

                      )}
                      {this.state.isVisible2 >= 8 && (

                        <tr className={styles.tarow2} id='8'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange8
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList8}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange8
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange8
                              }
                            />
                          </td>
                          <td  >
                            <input id='input8tutar' className={styles.input}
                              value={this.state.transferEdenList3.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input className={styles.input}
                              id='input8'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));
                                this.setState({ input8: newValue.toLocaleString("tr-TR") }, () => {
                                  this.topla(() => {
                                    if (this.state.a > transferedilenmevcuttoplam) {
                                      e.target.value = '';
                                      this.setState({ input8: '' });
                                    };
                                  });
                                });
                              }}
                            />
                          </td>

                        </tr>

                      )}
                      {this.state.isVisible2 >= 9 && (

                        <tr className={styles.tarow2} id='9'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange9
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList9}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange9
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange9
                              }
                            />
                          </td>
                          <td  >
                            <input id='input9tutar' className={styles.input}
                              value={this.state.transferEdenList4.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input className={styles.input}
                              id='input9'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));
                                this.setState({ input9: newValue.toLocaleString("tr-TR") }, () => {
                                  this.topla(() => {
                                    if (this.state.a > transferedilenmevcuttoplam) {
                                      e.target.value = '';
                                      this.setState({ input9: '' });
                                    };
                                  });
                                });
                              }}
                            />
                          </td>

                        </tr>

                      )}
                      {this.state.isVisible2 >= 10 && (

                        <tr className={styles.tarow2} id='10'>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilimasrafmerkeziList}
                              onSelectedValueChange={
                                this.handleSelectedMasrafMerkeziChange10
                              }
                            />

                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.secilibutcekoduList10}
                              onSelectedValueChange={
                                this.handleSelectedButceKoduChange10
                              }
                            />
                          </td>
                          <td >
                            <ComboBoxVirtualizedExample2
                              deger={this.state.aylar}
                              onSelectedValueChange={
                                this.handleAyChange10
                              }
                            />
                          </td>
                          <td  >
                            <input id='input10tutar' className={styles.input}
                              value={this.state.transferEdenList5.map((item) => item.tutar)} />

                          </td>
                          <td >
                            <input className={styles.input}
                              id='input10'
                              onChange={(e) => {
                                const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));
                                this.setState({ input10: newValue.toLocaleString("tr-TR") }, () => {
                                  this.topla(() => {
                                    if (this.state.a > transferedilenmevcuttoplam) {
                                      e.target.value = '';
                                      this.setState({ input10: '' });
                                    };
                                  });
                                });
                              }}
                            />
                          </td>

                        </tr>

                      )}

                      <tr id='toplam'>
                        <td colSpan={3}>
                        </td>
                        <td>
                          <input className={styles.input} value={tedentutar.toLocaleString("tr-TR")}>
                          </input>
                        </td>
                        <td>
                          <input id='tedenvalue' className={styles.input} value={transferedenmevcuttoplam.toLocaleString("tr-TR")} >
                          </input>
                        </td>
                      </tr>



                    </tbody>

                  </table>

                  <table className={styles.table} id='aciklama'>
                    <tr>
                      <th>
                        <div className={styles.fieldLabel}>
                          Açıklama
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <textarea id='aciklamatextarea' className={styles.inputam}>

                        </textarea>
                      </td>
                    </tr>

                  </table>

                </div>
                <br></br>
                <div className={styles.container2} id='gondertransfer'>
                  <table className={styles.table} id='submit1'>
                    <tr>
                      <td>
                        <button className={styles.customSubmitButton}
                          onClick={this.control}>

                          Gönder
                        </button>
                      </td>
                    </tr>

                  </table>
                </div>
              </PivotItem>

              <PivotItem headerText="Ek Bütçe Formu">

                <div className={styles.container} id='ekbutceekrani'>
                  <table className={styles.table} id='header2'>
                    <thead>
                      <th className={styles.th} >Ek Bütçe Formu </th>
                    </thead>
                  </table>

                  <table className={styles.table} id='ekbutce'>

                    <tbody>
                      <th colSpan={6} className={styles.th2} >Ek Bütçe İstenen Masraf Merkezi </th>

                      <tr>
                        <td>
                          <div className={styles.fieldLabel}>
                            Masraf Merkezi Tanımı Seçin:
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Bütçe Tanımı Seçin :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Ay Seçin :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Mevcut bütçe tutarı :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            İstenen Bütçe tutarı :
                          </div>
                        </td>
                        <td>
                          <div className={styles.fieldLabel}>
                            Yeni Bütçe tutarı :
                          </div>
                        </td>




                      </tr>

                      <tr className={styles.tarow2}>

                        <td >
                          <ComboBoxVirtualizedExample2
                            deger={this.state.secilimasrafmerkeziList}
                            onSelectedValueChange={
                              this.handleSelectedMasrafMerkeziChange11
                            }
                          />
                        </td>


                        <td >
                          <ComboBoxVirtualizedExample2
                            deger={this.state.secilibutcekoduList11}
                            onSelectedValueChange={
                              this.handleSelectedButceKoduChange11
                            }
                          />
                        </td>

                        <td >
                          <ComboBoxVirtualizedExample2
                            deger={this.state.aylar}
                            onSelectedValueChange={
                              this.handleAyChange11
                            }
                          />
                        </td>
                        <td >
                          <input className={styles.input} id='ekbutcemevcuttutar'
                            value={this.state.transferEdilenList11.map((item) => item.tutar)} />

                        </td>
                        <td>
                          <input
                            className={styles.input}
                            id='ekbutceistenen'
                            onChange={(e) => {
                              const newValue = parseFloat(e.target.value.replace(/\./g, '').replace(',', '.'));

                              this.setState({ input11: (newValue.toLocaleString("tr-TR")) })
                            }
                            }
                          />

                        </td>
                        <td >
                          <input className={styles.input}
                            id='ekbutceyeni'
                            value={ekbutceson.toLocaleString("tr-TR")} />
                        </td>

                      </tr>


                    </tbody>

                  </table>
                  <table className={styles.table} id='aciklama2'>
                    <tr>
                      <th>
                        <div className={styles.fieldLabel}>
                          Açıklama
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <textarea id='aciklamatextarea2' className={styles.inputam}>

                        </textarea>
                      </td>
                    </tr>

                  </table>



                </div>
                <br></br>
                <div className={styles.container2} id='gonderekbutce'>
                  <table className={styles.table} id='submit2'>
                    <tr>
                      <td>
                        <button className={styles.customSubmitButton}
                          onClick={this.control2}>

                          Gönder
                        </button>
                      </td>
                    </tr>

                  </table>
                </div>

              </PivotItem>
            </Pivot>


          </MYModal>
        )}
      </div>
    );
  }
}

// AUTHOR : UFUK CAN KAHRAMAN
// 2024
// NOT : EĞER BUNU OKUYORSAN VE KODU DÜZELTMEN GEREKİYORSA  KUSURA BAKMA HAKLISIN KOD BİRAZ SPAGETTİ OLMUŞ AMA SEN YAPARSIN KOÇ!!!