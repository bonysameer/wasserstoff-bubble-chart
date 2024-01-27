import styles from "./bubble-chart.module.css";
import icon from "./asset/icon.svg";
import arrow from "./asset/arrow-up.svg";
import bubblechart from "./asset/bubble-chart.svg";
import chart from "./asset/chart.svg";
import bigchart from "./asset/chart--double-big-circle-chart.svg";
import divider from "./asset/divider.svg" ;
import map from "./asset/map.svg";
import option from "./asset/option.svg";
import profile from "./asset/profile.svg";
import tool from "./asset/tool.svg";
import logo from "./asset/wstflogo-1.svg";
import zoom from "./asset/zoom.svg";

const BubbleChart = () => {
  return (
    <div className={styles.bubbleChart}>
      <div className={styles.background} />
      <div className={styles.bigWidgetBubbleChart}>
        <div className={styles.bgLines} />
        <div className={styles.bgLines1} />
        <img
          className={styles.bubbleChartIcon}
          alt=""
          src={bubblechart}
        />
        <div className={styles.investments}>
          <div className={styles.time}>3 month</div>
          <div className={styles.tittle}>Investments</div>
          <div className={styles.value}>$76,644</div>
        </div>
        <div className={styles.design}>
          <div className={styles.time1}>3 month</div>
          <div className={styles.value1}>$32,982</div>
          <div className={styles.title}>Design</div>
        </div>
        <div className={styles.finance}>
          <div className={styles.value2}>
            <span> $</span>
            <span className={styles.span}>23,657</span>
          </div>
          <div className={styles.title1}>Finance</div>
        </div>
        <div className={styles.business}>
          <div className={styles.value3}>$21,987</div>
          <div className={styles.title2}>Business</div>
        </div>
        <div className={styles.development}>
          <div className={styles.value4}>$31,657</div>
          <div className={styles.title3}>Development</div>
        </div>
      </div>
      <div className={styles.title4}>Design faster</div>
      <div className={styles.bubble} />
      <div className={styles.bubble1} />
      <div className={styles.bubble2} />
      <div className={styles.bubble3} />
      <div className={styles.bubble4} />
      <b className={styles.timeline}>Timeline</b>
      <div className={styles.timeline1}>
        <div className={styles.backgroundElement} />
        <div className={styles.dateRangePicker}>
          <div className={styles.timePeriod}>
            <div className={styles.period}>1W</div>
          </div>
          <div className={styles.timePeriod}>
            <div className={styles.period}>1M</div>
          </div>
          <div className={styles.timePeriod2}>
            <div className={styles.hover} />
            <b className={styles.period2}>3M</b>
          </div>
          <div className={styles.timePeriod}>
            <div className={styles.period}>1Y</div>
          </div>
          <div className={styles.timePeriod}>
            <div className={styles.period}>ALL</div>
          </div>
        </div>
      </div>
      <div className={styles.navigationBar}>
        <div className={styles.bg} />
        <div className={styles.search}>
          <div className={styles.input} />
          <img className={styles.icon} alt="" src={icon} />
        </div>
        <div className={styles.tab} />
        <div className={styles.menu}>
          <div className={styles.label}>Statistics</div>
          <div className={styles.label1}>Overview</div>
          <div className={styles.label}>Dashboard</div>
          <div className={styles.label}>Analytics</div>
        </div>
        <img className={styles.profileIcon} alt="" src={profile} />
        <img className={styles.optionIcon} alt="" src={option} />
        <div className={styles.name}>WASSERSTOFF</div>
        <img className={styles.wstfLogo1Icon} alt="" src={logo} />
      </div>
      <div className={styles.footer}>
        <div className={styles.bg} />
        <b className={styles.orionDataVisualisation}>
          Orion data visualisation
        </b>
        <b className={styles.b}>bonysameer@2024</b>
      </div>
      <div className={styles.informerTrendGoods}>
        <div className={styles.value5}>204</div>
        <b className={styles.title5}>Trend goods</b>
        <img className={styles.icon1} alt="" src={icon} />
      </div>
      <div className={styles.informerTrendGoods1}>
        <div className={styles.value6}>65,540</div>
        <b className={styles.title6}>Shopping views</b>
        <img className={styles.icon1} alt="" src={icon} />
      </div>
      <div className={styles.informerTrendGoods2}>
        <div className={styles.value7}>324</div>
        <b className={styles.title7}>Store dynamics</b>
        <img className={styles.icon1} alt="" src={icon} />
      </div>
      <div className={styles.panelGroup}>
        <img className={styles.zoomIcon} alt="" src={zoom} />
        <div className={styles.map}>
          <div className={styles.bg1} />
          <img className={styles.mapIcon} alt="" src={map} />
        </div>
        <img className={styles.toolIcon} alt="" src={tool} />
      </div>
      <div className={styles.widgetMSizeCombinedCir}>
        <div className={styles.graph}>
          <img
            className={styles.chartDoubleBigCircleChar}
            alt=""
            src={bigchart}
          />
          <div className={styles.info}>
            <div className={styles.title8}>
              <div className={styles.name1}>Total earning</div>
            </div>
            <div className={styles.value8}>
              <div className={styles.amount}>$12,875</div>
              <div className={styles.indicator}>
                <img
                  className={styles.arrowUpIcon}
                  alt=""
                  src={arrow}
                />
                <div className={styles.percent}>2%</div>
              </div>
            </div>
            <div className={styles.detail}>Compared to $21,504 last year</div>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.name2}>Presentation</div>
            <div className={styles.amount1}>862</div>
            <div className={styles.graph1}>
              <div className={styles.column} />
              <div className={styles.column1} />
              <div className={styles.column2} />
              <div className={styles.column3} />
              <img className={styles.chartIcon} alt="" src={chart} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.name2}>Development</div>
            <div className={styles.amount1}>753</div>
            <div className={styles.graph1}>
              <div className={styles.column} />
              <div className={styles.column1} />
              <div className={styles.column2} />
              <div className={styles.column3} />
              <img className={styles.chartIcon1} alt="" src={chart} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.name2}>Research</div>
            <div className={styles.amount1}>553</div>
            <div className={styles.graph1}>
              <div className={styles.column} />
              <div className={styles.column1} />
              <div className={styles.column2} />
              <div className={styles.column3} />
              <img className={styles.chartIcon2} alt="" src={chart} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.widgetMSizeOmpositeIn}>
        <div className={styles.informer}>
          <div className={styles.title9}>
            <div className={styles.name5}>Total earning</div>
          </div>
          <div className={styles.value9}>
            <div className={styles.amount4}>$12,875</div>
            <div className={styles.indicator1}>
              <img className={styles.arrowUpIcon} alt="" src={arrow} />
              <div className={styles.percent1}>10%</div>
            </div>
          </div>
          <div className={styles.detail1}>Compared to $21,490 last year</div>
        </div>
        <img className={styles.dividerIcon} alt="" src={divider} />
        <div className={styles.informer}>
          <div className={styles.title9}>
            <div className={styles.name5}>Sales</div>
          </div>
          <div className={styles.value9}>
            <div className={styles.amount4}>$43,123</div>
            <div className={styles.indicator1}>
              <img className={styles.arrowUpIcon} alt="" src={arrow} />
              <div className={styles.percent1}>12%</div>
            </div>
          </div>
          <div className={styles.detail1}>Compared to $21,490 last year</div>
        </div>
      </div>
      <div className={styles.tableIndicatorTable}>
        <div className={styles.summary}>
          <div className={styles.summary}>
            <div className={styles.name7}>Travel</div>
            <div className={styles.amount6}>760</div>
            <div className={styles.summary1}>2,540</div>
          </div>
          <div className={styles.status}>
            <img className={styles.arrowUpIcon} alt="" src={arrow} />
            <img className={styles.arrowUpIcon4} alt="" src={arrow} />
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.summary}>
            <div className={styles.name7}>Presentation</div>
            <div className={styles.amount6}>650</div>
            <div className={styles.summary1}>2,304</div>
          </div>
          <div className={styles.status}>
            <img className={styles.arrowUpIcon4} alt="" src={arrow} />
            <img className={styles.arrowUpIcon} alt="" src={arrow} />
          </div>
        </div>
        <div className={styles.summary}>
          <div className={styles.summary}>
            <div className={styles.name7}>Business</div>
            <div className={styles.amount6}>612</div>
            <div className={styles.summary1}>2,140</div>
          </div>
          <div className={styles.status}>
            <img className={styles.arrowUpIcon} alt="" src={arrow} />
            <img className={styles.arrowUpIcon4} alt="" src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleChart;
