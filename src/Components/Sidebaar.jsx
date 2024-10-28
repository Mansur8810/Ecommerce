import React from "react";
import { SideBaarContent } from "../Constant/Main";

const Sidebaar = () => {
  return (
    <div className="md:block hidden">
      <ul>
        {SideBaarContent.map((items) => (
          <li key={items.option} className="text-sm">
            <div className="collapse">
              <input type="checkbox"/>
              <div className="collapse-title">{items.option}</div>
              {items.submenu && (
                <div className="collapse-content">
                  <ul>
                    {items.submenu.map((subItem) => (
                      <li key={subItem.title} className="">
                        <a href={subItem.href}>{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebaar;
