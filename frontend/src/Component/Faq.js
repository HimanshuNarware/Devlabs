import React, { useState } from 'react';
import "../style/faq.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from './accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Faq() {
  let [index, setIndex] = useState(0);

  return (
    <section className="faq">
      <div className="faq1">
        <div className="yet-another-custom-class">
          <span className="text">Our Value</span>
          <span className="text-white">
            MyStory - Next.js Blog/Story telling Template
          </span>
          <span className="text-gray-500-text-sm">
            MyStory aims to provide a platform where individuals can share their
            stories without the pressure of revealing their identities.
            It&apos;s a safe space for expression and connection.
          </span>
          <Accordion
            className="border-none mt-8"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`border-2 border-gray-400 rounded-lg overflow-hidden mb-5 ${index === i ? 'open' : 'close'}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="custom-flex-container">
                      <AccordionItemState>
                        {({ expanded }) => (
                          <div className={expanded ? 'expanded' : 'collapsed'} />
                        )}
                      </AccordionItemState>
                      <div className="custom-flex-container1">
                        <div className="custom-flex-container2">
                          {item.icon}
                        </div>
                        <span className='font-bold'>
                          {item.heading}
                        </span>
                        <div className="custom-container2" onClick={() => {
                          setIndex(i);
                        }}>
                          <MdOutlineArrowDropDown
                            style={{ color: "white" }}
                            size={20}
                          />
                        </div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="custom-text1">
                      {item.detail}
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
