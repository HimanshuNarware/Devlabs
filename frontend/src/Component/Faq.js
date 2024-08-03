import React, { useState } from "react";
import "../style/faq.css";
import {
  Accordion, 
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "./accordion";
import "react-accessible-accordion/dist/fancy-example.css";
export default function Faq() {
  let [index, setIndex] = useState(0);
  const [className, setClassName] = useState(null);

  return (
    <section className="faq">
      <div className="faq__content">
        <div className="faq__header">
          <span className="faq__header-text">Frequently Asked Questions</span>
          <Accordion
            className="faq__border-none faq__mt-8"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`faq__border-2 faq__border-gray faq__rounded-lg faq__overflow-hidden faq__mb-5 ${
                    index === i ? "faq__accordion-open" : "faq__accordion-close"
                  }`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="faq__accordion-item">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div
                        className="faq__accordion-button"
                        onClick={() => setIndex(i)}
                      >
                        <div className="faq__accordion-icon">{item.icon}</div>
                        <span className="font-bold">{item.heading}</span>
                        <MdOutlineArrowDropDown
                          style={{ color: "white" }}
                          size={20}
                        />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="faq__accordion-detail">
                      <p className="custom-text1">{item.detail}</p>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
