export default class View {
  constructor(root, { changeChartType }) {
    this.root = root;
    this.changeChartType = changeChartType;

    this._BtnChangeChartType();
  }

  _BtnChangeChartType() {
    const changeChartTypeButtons =
      this.root.querySelectorAll('.change-chart-type');

    console.log(changeChartTypeButtons);
    changeChartTypeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        console.log(btn.dataset.charttype);

        this.changeChartType(btn.dataset.charttype);
      });
    });
  }
}
