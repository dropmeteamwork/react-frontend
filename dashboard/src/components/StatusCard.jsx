// card for Total Users and so on
import React from "react";
import SvgIcon from "./SvgIcon"; // Assuming SvgIcon is still used elsewhere or for future needs
import FilledSvgIcon from "./FilledSvgIcon";

export default function StatusCard({
  title,
  number,
  pathD,
  iconColor,
  subTitle,
  activeToday,
  changeFromLastWeek,
}) {
  return (
    <>
      <div className={`card bg-base-100 shadow-sm`}>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-lg capitalize">{title}</h2>
            <span className="text-xl">
              <FilledSvgIcon pathD={pathD} iconColor={iconColor} />
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <span className="text-2xl font-semibold">{number}</span>
            </li>

            {/* Display subtitle if provided */}
            {subTitle && (
              <li>
                <span className="text-gray-500">{subTitle}</span>
              </li>
            )}
            {/* Display activeToday if provided */}
            {activeToday && (
              <li>
                <span className="text-gray-500">{activeToday}</span>
              </li>
            )}
            {/* Display changeFromLastWeek if provided, with conditional color */}
            {changeFromLastWeek && (
              <li>
                <span
                  className={
                    changeFromLastWeek.includes("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {changeFromLastWeek}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
