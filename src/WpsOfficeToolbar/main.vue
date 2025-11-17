<template>
  <div :class="$style['wrapper']">
    <div :class="$style['toolbar-container']">
      <div :class="$style['logo-section']">
        <div :class="$style['logo-and-search-container']">
          <div :class="$style['logo-wrapper']">
            <ElButton size="large" round="round" :class="$style['logo-button']">
              <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/OlFjQ6sNVb8AAAAAQBAAAAgAejH3AQBr/original" :class="$style['logo-image']" />
              <span :class="$style['logo-text']">
                WPS Office
              </span>
            </ElButton>
            <ElInput size="large" placeholder="文字文稿1" :class="$style['search-input']">
              <template #prepend="prepend">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/94FUTp7p7_kAAAAALlAAAAgAejH3AQBr/original" :class="$style['search-prefix-icon']" />
              </template>
              <template #append="append">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/xVZ5Rb9Tx8oAAAAADuAAAAgAejH3AQBr/original" :class="$style['search-suffix-icon']" />
              </template>
            </ElInput>
          </div>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/1Y7rTb97cccAAAAAD7AAAAgAejH3AQBr/original" :class="$style['user-avatar']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/PlshTZHvGf0AAAAAFfAAAAgAejH3AQBr/original" :class="$style['notification-icon']" />
        </div>
        <div :class="$style['logo-wrapper']">
          <ElButton size="large" round="round" :class="$style['upgrade-button']">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/gBRwRIPPEkMAAAAANYAAAAgAejH3AQBr/original" :class="$style['upgrade-icon']" />
            <span :class="$style['upgrade-text']">
              升级
            </span>
          </ElButton>
          <div :class="$style['divider-line']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/80l1RIFhpqQAAAAAEvAAAAgAejH3AQBr/original" :class="$style['help-icon']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/0MZySJPmug8AAAAAQCAAAAgAejH3AQBr/original" :class="$style['settings-icon']" />
        </div>
      </div>
      <div :class="$style['menu-bar']">
        <ElSelect placeholder="文件" size="large" :class="$style['file-menu-select']" />
        <span :class="$style['start-menu-item']">
          开始
        </span>
        <span :class="$style['insert-menu-item']">
          插入
        </span>
        <span :class="$style['page-menu-item']">
          页面
        </span>
        <span :class="$style['reference-menu-item']">
          引用
        </span>
        <span :class="$style['review-menu-item']">
          审阅
        </span>
        <span :class="$style['insert-menu-item']">
          视图
        </span>
        <span :class="$style['insert-menu-item']">
          工具
        </span>
        <span :class="$style['membership-menu-item']">
          会员专享
        </span>
        <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/C-gPTZPih2kAAAAANUAAAAgAejH3AQBr/original" :class="$style['wps-ai-icon']" />
        <span :class="$style['wps-ai-text']">
          WPS AI
        </span>
        <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/ZpPTTbsIU7MAAAAAPtAAAAgAejH3AQBr/original" :class="$style['wps-ai-dropdown-icon']" />
        <div :class="$style['share-section']">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/6_ucQYK5nRgAAAAALwAAAAgAejH3AQBr/original" :class="$style['share-icon']" />
          <span :class="$style['share-text']">
            分享
          </span>
        </div>
      </div>
    </div>
    <div :class="$style['editing-toolbar']">
      <div :class="$style['formatting-tools']">
        <div :class="$style['clipboard-tools']">
          <div :class="$style['format-brush-container']">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/XoaNRZzuyfUAAAAAQBAAAAgAejH3AQBr/original" :class="$style['format-brush-icon']" />
            <span :class="$style['format-brush-text']">
              格式刷
            </span>
          </div>
          <div :class="$style['paste-container']">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/uYumRbmXWtIAAAAAFdAAAAgAejH3AQBr/original" :class="$style['paste-icon']" />
            <span :class="$style['paste-text']">
              粘贴
            </span>
          </div>
        </div>
        <div :class="$style['separator-icons']">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/RwZQQqcV5FoAAAAANIAAAAgAejH3AQBr/original" :class="$style['separator-icon-1']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/HnghSKw_-okAAAAAFLAAAAgAejH3AQBr/original" :class="$style['separator-icon-2']" />
        </div>
      </div>
      <div :class="$style['logo-wrapper']">
        <div :class="$style['format-brush-container']">
          <div :class="$style['font-and-size-selectors']">
            <Space.Compact>
              <div :class="$style['logo-wrapper']">
                <ElSelect placeholder="宋体（正文）" size="large" :class="$style['font-family-select']" />
                <ElSelect placeholder="五号" size="large" :class="$style['font-size-select']" />
              </div>
            </Space.Compact>
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/RwmCRr3SC3cAAAAAJSAAAAgAejH3AQBr/original" :class="$style['bold-icon']" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/6L0sR54JJM4AAAAAI9AAAAgAejH3AQBr/original" :class="$style['italic-icon']" />
            <ElIconAntd :iconData="CaretDownFilled" :class="$style['bold-toggle-icon']" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/_S-EQpKLXyAAAAAAKvAAAAgAejH3AQBr/original" :class="$style['underline-icon']" />
          </div>
          <div :class="$style['text-style-icons']">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/7VXYT7LsCVgAAAAAHuAAAAgAejH3AQBr/original" :class="$style['highlight-icon']" />
            <ElIconAntd :iconData="ItalicOutlined" :class="$style['italic-toggle-icon']" />
            <ElIconAntd :iconData="UnderlineOutlined" :class="$style['underline-toggle-icon']" />
            <ElIconAntd :iconData="CaretDownFilled" :class="$style['highlight-dropdown-icon']" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/mzAxQLPgregAAAAAHrAAAAgAejH3AQBr/original" :class="$style['font-color-icon']" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/6A-dQKTC9KAAAAAAI5AAAAgAejH3AQBr/original" :class="$style['background-color-icon']" />
            <ElIconAntd :iconData="CaretDownFilled" :class="$style['highlight-dropdown-icon']" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/rfrlQaoQzR4AAAAAOgAAAAgAejH3AQBr/original" :class="$style['text-align-left-icon']" />
            <ElIconAntd :iconData="CaretDownFilled" :class="$style['text-align-left-toggle-icon']" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/BICPQr8R6IMAAAAAMYAAAAgAejH3AQBr/original" :class="$style['text-align-center-icon']" />
            <ElIconAntd :iconData="CaretDownFilled" :class="$style['text-align-center-toggle-icon']" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/VFBaR7yGLeQAAAAAJ9AAAAgAejH3AQBr/original" :class="$style['text-align-right-icon']" />
            <ElIconAntd :iconData="CaretDownFilled" :class="$style['text-align-right-toggle-icon']" />
            <ElButton size="large" round="round" :class="$style['more-formatting-button']">
              <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/AJqbQ78vWLAAAAAAIsAAAAgAejH3AQBr/original" :class="$style['more-formatting-icon']" />
            </ElButton>
          </div>
        </div>
        <div :class="$style['paragraph-settings']">
          <div :class="$style['format-brush-container']">
            <div :class="$style['line-spacing-container']">
              <div :class="$style['logo-wrapper']">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/uLKFTINGTUQAAAAADfAAAAgAejH3AQBr/original" :class="$style['line-spacing-icon']" />
                <ElIconAntd :iconData="CaretDownFilled" :class="$style['line-spacing-toggle-icon']" />
              </div>
              <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/2V0KT4Y9roQAAAAAFNAAAAgAejH3AQBr/original" :class="$style['bullets-icon']" />
              <ElIconAntd :iconData="CaretDownFilled" :class="$style['text-align-left-toggle-icon']" />
            </div>
            <div :class="$style['list-icons']">
              <ElIconAntd :iconData="MenuOutlined" :class="$style['bullets-list-icon']" />
              <ElIconAntd :iconData="MenuOutlined" :class="$style['italic-toggle-icon']" />
              <ElIconAntd :iconData="MenuOutlined" :class="$style['multi-level-list-icon']" />
            </div>
          </div>
          <div :class="$style['alignment-tools']">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/S-hYTbNOMaYAAAAAEXAAAAgAejH3AQBr/original" :class="$style['align-left-icon']" />
            <div :class="$style['alignment-button-wrapper']">
              <ElButton size="large" :class="$style['alignment-menu-button']">
                <ElIconAntd :iconData="MenuOutlined" />
              </ElButton>
            </div>
          </div>
          <div :class="$style['advanced-formatting']">
            <div :class="$style['column-settings']">
              <div :class="$style['format-brush-container']">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/nG7-TaCpwy8AAAAAEXAAAAgAejH3AQBr/original" :class="$style['one-column-icon']" />
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/2nTAS4-STxQAAAAAFhAAAAgAejH3AQBr/original" :class="$style['two-column-icon']" />
              </div>
              <div :class="$style['more-columns']">
                <div :class="$style['logo-wrapper']">
                  <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/LBVqSblvEloAAAAAMYAAAAgAejH3AQBr/original" :class="$style['line-spacing-icon']" />
                  <ElIconAntd :iconData="CaretDownFilled" :class="$style['three-column-toggle-icon']" />
                </div>
                <div :class="$style['text-direction-container']">
                  <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/hEmyQpDi5I4AAAAAF2AAAAgAejH3AQBr/original" :class="$style['text-direction-icon']" />
                  <ElIconAntd :iconData="CaretDownFilled" :class="$style['text-direction-toggle-icon']" />
                </div>
              </div>
              <div :class="$style['paste-container']">
                <div :class="$style['border-settings']">
                  <div :class="$style['logo-wrapper']">
                    <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/p-M1SLHEydEAAAAAFmAAAAgAejH3AQBr/original" :class="$style['border-style-icon']" />
                    <ElIconAntd :iconData="CaretDownFilled" :class="$style['border-style-toggle-icon']" />
                  </div>
                  <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/EF5oRY7iMvkAAAAAI_AAAAgAejH3AQBr/original" :class="$style['border-color-icon']" />
                  <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/6NEKSo99wk4AAAAADuAAAAgAejH3AQBr/original" :class="$style['border-weight-icon']" />
                </div>
                <div :class="$style['shading-settings']">
                  <div :class="$style['shading-preview']" />
                  <div :class="$style['shading-color-container']">
                    <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/bFIhRpTRTTwAAAAAMOAAAAgAejH3AQBr/original" :class="$style['shading-color-icon']" />
                    <ElIconAntd :iconData="CaretDownFilled" :class="$style['three-column-toggle-icon']" />
                  </div>
                  <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/MFCMSql2hZgAAAAADqAAAAgAejH3AQBr/original" :class="$style['shading-more-icon']" />
                  <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/u318RYT2vUwAAAAAC9AAAAgAejH3AQBr/original" :class="$style['shading-none-icon']" />
                </div>
              </div>
            </div>
            <span :class="$style['vertical-text-symbol']">
              y
            </span>
          </div>
        </div>
        <div :class="$style['document-navigation']">
          <ElSegmented :options="segmentedData1" v-model="segmentedModel1" :class="$style['document-style-segmented']" />
          <div :class="$style['navigation-tools']">
            <div :class="$style['find-replace-section']">
              <div :class="$style['find-container']">
                <ElIconAntd :iconData="SearchOutlined" :class="$style['search-tool-icon']" />
                <span :class="$style['find-text']">
                  查找
                </span>
              </div>
              <div :class="$style['select-container']">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/_JhFRrdUNw4AAAAAL0AAAAgAejH3AQBr/original" :class="$style['select-icon']" />
                <span :class="$style['find-text']">
                  选择
                </span>
              </div>
            </div>
            <div :class="$style['layout-tools']">
              <div :class="$style['format-brush-container']">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/jiVfRbXJKzUAAAAAIjAAAAgAejH3AQBr/original" :class="$style['text-layout-icon']" />
                <span :class="$style['text-layout-text']">
                  文字排版
                </span>
              </div>
              <div :class="$style['arrange-container']">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/phXgTIbpO2UAAAAAGiAAAAgAejH3AQBr/original" :class="$style['arrange-icon']" />
                <span :class="$style['paste-text']">
                  排列、
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style['status-bar']">
      <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/IoUxTpx2bVsAAAAAGuAAAAgAejH3AQBr/original" :class="$style['status-bar-background']" />
      <div :class="$style['format-brush-container']">
        <div :class="$style['page-numbers']">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/6VZVT5-CarsAAAAAEXAAAAgAejH3AQBr/original" :class="$style['page-number-icon-1']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/SoaoQoPibigAAAAAGzAAAAgAejH3AQBr/original" :class="$style['page-number-icon-2']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/mk96Qo7wcgQAAAAAGYAAAAgAejH3AQBr/original" :class="$style['page-number-icon-3']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/xAgHRIfSIHcAAAAAGHAAAAgAejH3AQBr/original" :class="$style['page-number-icon-4']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/lUSzTLaASI0AAAAAFcAAAAgAejH3AQBr/original" :class="$style['page-number-icon-5']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/tJg9T7UlaV4AAAAAIWAAAAgAejH3AQBr/original" :class="$style['page-number-icon-6']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/rmHTTZcLNBgAAAAAICAAAAgAejH3AQBr/original" :class="$style['page-number-icon-7']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/my5VSq3mIbUAAAAAIoAAAAgAejH3AQBr/original" :class="$style['page-number-icon-8']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/cBKiS5PCd88AAAAAHhAAAAgAejH3AQBr/original" :class="$style['page-number-icon-9']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/tc40SptvZRgAAAAAG3AAAAgAejH3AQBr/original" :class="$style['page-number-icon-10']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/FhtfT4dwxFQAAAAAJ7AAAAgAejH3AQBr/original" :class="$style['page-number-icon-11']" />
          <span :class="$style['page-number-text-1']">
            18
          </span>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/vYyVQoERpL8AAAAAMGAAAAgAejH3AQBr/original" :class="$style['page-number-icon-12']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/qcGyTr0O83cAAAAAGmAAAAgAejH3AQBr/original" :class="$style['page-number-icon-13']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/LpkTSIM1ECcAAAAAJQAAAAgAejH3AQBr/original" :class="$style['page-number-icon-14']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/wHlzTJ9_D00AAAAAMnAAAAgAejH3AQBr/original" :class="$style['page-number-icon-15']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/53QeR4cmYAYAAAAAMXAAAAgAejH3AQBr/original" :class="$style['page-number-icon-14']" />
          <span :class="$style['page-number-text-2']">
            30
          </span>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/_tdQSaU7MLwAAAAALkAAAAgAejH3AQBr/original" :class="$style['page-number-icon-13']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/vFMMRqOXtCMAAAAALHAAAAgAejH3AQBr/original" :class="$style['page-number-icon-14']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/MvpQR4BEnWUAAAAANgAAAAgAejH3AQBr/original" :class="$style['page-number-icon-19']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/DpMzT6_koZ4AAAAANzAAAAgAejH3AQBr/original" :class="$style['page-number-icon-20']" />
          <span :class="$style['page-number-text-3']">
            40
          </span>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/9Z25T78nYR4AAAAAKaAAAAgAejH3AQBr/original" :class="$style['page-number-icon-21']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/OqJQSI2oE0wAAAAAGKAAAAgAejH3AQBr/original" :class="$style['page-number-icon-13']" />
          <span :class="$style['page-number-text-4']">
            46
          </span>
        </div>
        <div :class="$style['document-statistics']">
          <div :class="$style['statistics-container']">
            <ElCheckbox :class="$style['statistics-checkbox']" />
            <span :class="$style['statistic-value-1']">
              2
            </span>
            <span :class="$style['statistic-value-2']">
              3
            </span>
            <span :class="$style['statistic-value-3']">
              4
            </span>
            <span :class="$style['statistic-value-4']">
              5
            </span>
            <span :class="$style['statistic-value-5']">
              6
            </span>
            <span :class="$style['statistic-value-5']">
              7
            </span>
            <span :class="$style['statistic-value-7']">
              08
            </span>
            <span :class="$style['statistic-value-8']">
              9
            </span>
            <span :class="$style['statistic-value-9']">
              100
            </span>
            <span :class="$style['statistic-operator']">
              =
            </span>
            <span :class="$style['statistic-value-10']">
              12
            </span>
            <span :class="$style['statistic-value-11']">
              13
            </span>
            <span :class="$style['statistic-value-12']">
              14
            </span>
            <span :class="$style['statistic-value-13']">
              15
            </span>
            <span :class="$style['statistic-value-13']">
              16
            </span>
            <span :class="$style['statistic-value-15']">
              14
            </span>
            <span :class="$style['statistic-value-16']">
              18
            </span>
            <span :class="$style['statistic-value-17']">
              19
            </span>
            <span :class="$style['statistic-value-18']">
              200
            </span>
            <span :class="$style['statistic-value-19']">
              24
            </span>
            <span :class="$style['statistic-value-20']">
              2
            </span>
            <span :class="$style['page-count-text']">
              页面:1/1
            </span>
          </div>
          <span :class="$style['word-count-text']">
            字数:69
          </span>
          <span :class="$style['spell-check-status']">
            拼写检查:打开
          </span>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/m1DVS7ZMUSwAAAAADcAAAAgAejH3AQBr/original" :class="$style['spell-check-icon']" />
          <div :class="$style['document-content']">
            <div :class="$style['content-section-1']">
              <div :class="$style['content-block-1']">
                <div :class="$style['content-variant-1']" />
                <span :class="$style['content-text-1']">
                  你到付老实交代发了收到了发觉首单礼金水电费离开时间法律手段发卡机散掉了;封建时代
                </span>
                <div :class="$style['content-variant-2']" />
              </div>
              <div :class="$style['content-section-2']">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/vNW6SLyYec8AAAAADJAAAAgAejH3AQBr/original" :class="$style['content-image']" />
                <span :class="$style['content-text-2']">
                  法拉利拉萨东方巨龙啦啦啦啦啦烦死了垃圾袋发了地方乐凯大街发
                </span>
              </div>
            </div>
            <div :class="$style['status-indicators']">
              <span :class="$style['proofing-text']">
                校对
              </span>
              <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/7k34Qaf-TS0AAAAANjAAAAgAejH3AQBr/original" :class="$style['proofing-icon']" />
              <span :class="$style['backup-status']">
                本地备份开
              </span>
              <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/NhkpR4KW2BUAAAAANzAAAAgAejH3AQBr/original" :class="$style['backup-icon']" />
              <span :class="$style['return-text']">
                回
              </span>
              <div :class="$style['language-settings']">
                <span :class="$style['language-text']">
                  三l
                </span>
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/os41SrHO8YIAAAAALbAAAAgAejH3AQBr/original" :class="$style['language-icon']" />
              </div>
              <span :class="$style['direction-text']">
                向
              </span>
            </div>
          </div>
          <span :class="$style['zoom-percentage']">
            162%
          </span>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/IDh2Q4V3gTkAAAAADcAAAAgAejH3AQBr/original" :class="$style['zoom-out-icon']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/yvJDQqrJOgAAAAAACOAAAAgAejH3AQBr/original" :class="$style['zoom-in-icon']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/forpTbRyja8AAAAAK-AAAAgAejH3AQBr/original" :class="$style['full-screen-icon']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/0EffSpglpGAAAAAADRAAAAgAejH3AQBr/original" :class="$style['reading-layout-icon']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/wF7zTpKUY_sAAAAAHwAAAAgAejH3AQBr/original" :class="$style['print-icon']" />
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/JZPAS4iUpZcAAAAAENAAAAgAejH3AQBr/original" :class="$style['save-icon']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CaretDownFilled, ItalicOutlined, UnderlineOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons-svg';

export default {
  data () {
    return {
      segmentedData1: [{"label":"正文","value":"1"},{"label":"标题1","value":"2"},{"label":"标题2","value":"3"},{"label":"标题3","value":"4"},{"label":"标题4","value":"5"}],
      segmentedModel1: '1',
      CaretDownFilled,
      ItalicOutlined,
      UnderlineOutlined,
      MenuOutlined,
      SearchOutlined
    };
  }
};
</script>

<style module>
.wrapper {
  background-color: #e5e5e3;
  width: 3193px;
  display: flex;
  flex-direction: column;
  padding-left: 6px;
  padding-top: 10px;
  padding-bottom: 2px;
}

.toolbar-container {
  margin-left: 26px;
  margin-right: 18px;
  display: flex;
  flex-direction: column;
}

.logo-section {
  margin-left: 16px;
  margin-right: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo-and-search-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16;
}

.logo-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo-button {
  background-color: #d9d9d7;
  border: none;
  min-width: 240px;
  height: 56px;
}

.logo-image {
  border-radius: 2px;
  flex-shrink: 0;
  width: 32px;
  height: 26px;
  display: block;
}

.logo-text {
  color: #222222;
  font-size: 26px;
  white-space: nowrap;
}

.search-input {
  border-radius: 30px;
  width: 485px;
  margin-left: 4px;
}

.search-prefix-icon {
  border-radius: 4px;
  flex-shrink: 0;
  width: 35px;
  height: 32px;
}

.search-suffix-icon {
  border-radius: 6px;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

.user-avatar {
  flex-shrink: 0;
  border-radius: 5px;
  width: 32px;
  height: 30px;
}

.notification-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 16px;
  height: 14px;
}

.upgrade-button {
  border-color: #e2b8b6;
  border-style: solid;
  border-width: 2px;
  height: 48px;
}

.upgrade-icon {
  border-radius: 14px;
  flex-shrink: 0;
  width: 35px;
  height: 36px;
  display: block;
}

.upgrade-text {
  color: #ba2524;
  font-size: 26px;
  white-space: nowrap;
}

.divider-line {
  background-color: #cdcdcb;
  width: 3px;
  margin-left: 18px;
  height: 39px;
}

.help-icon {
  border-radius: 6px;
  flex-shrink: 0;
  width: 32px;
  margin-left: 26px;
  height: 30px;
}

.settings-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 50px;
  margin-left: 22px;
  height: 46px;
}

.menu-bar {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.file-menu-select {
  min-width: 508px;
}

.start-menu-item {
  color: #1b64ca;
  font-size: 26px;
  margin-left: 494px;
  white-space: nowrap;
}

.insert-menu-item {
  color: #252525;
  font-size: 26px;
  margin-left: 66px;
  white-space: nowrap;
}

.page-menu-item {
  color: #252525;
  font-size: 26px;
  margin-left: 70px;
  white-space: nowrap;
}

.reference-menu-item {
  color: #252525;
  font-size: 26px;
  margin-left: 68px;
  white-space: nowrap;
}

.review-menu-item {
  color: #252525;
  font-size: 26px;
  margin-left: 72px;
  white-space: nowrap;
}

.membership-menu-item {
  color: #252525;
  font-size: 26px;
  margin-left: 60px;
  white-space: nowrap;
}

.wps-ai-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 30px;
  margin-left: 72px;
  height: 25px;
}

.wps-ai-text {
  color: #252525;
  font-size: 26px;
  margin-left: 10px;
  white-space: nowrap;
}

.wps-ai-dropdown-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 32px;
  margin-left: 838px;
  height: 28px;
}

.share-section {
  border-radius: 12px;
  background-color: #1b6fe3;
  margin-left: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px 4px 14px;
}

.share-icon {
  border-radius: 4px;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
}

.share-text {
  color: #ffffff;
  font-size: 26px;
  margin-left: 8px;
  white-space: nowrap;
}

.editing-toolbar {
  border-radius: 36px;
  background-color: #ffffff;
  border-color: #cbcbc9;
  border-style: solid;
  border-width: 2px;
  margin-top: 12px;
  margin-left: 15px;
  margin-right: 12px;
  display: flex;
  flex-direction: row;
  padding-right: 6px;
  justify-content: space-between;
}

.formatting-tools {
  border-radius: 12px;
  background-color: #ffffff;
  border-color: #cdcdcb;
  border-style: solid;
  border-width: 2px;
  display: flex;
  flex-direction: row;
  padding: 20px 24px 28px 38px;
}

.clipboard-tools {
  display: flex;
  flex-direction: row;
}

.format-brush-container {
  display: flex;
  flex-direction: column;
}

.format-brush-icon {
  border-radius: 20px;
  flex-shrink: 0;
  width: 42px;
  height: 44px;
  align-self: center;
}

.format-brush-text {
  color: #252525;
  font-size: 26px;
  margin-top: 10px;
  white-space: nowrap;
}

.paste-container {
  margin-left: 22px;
  display: flex;
  flex-direction: column;
}

.paste-icon {
  border-radius: 12px;
  flex-shrink: 0;
  width: 42px;
  height: 44px;
  align-self: flex-end;
}

.paste-text {
  color: #252525;
  font-size: 26px;
  margin-top: 8px;
  white-space: nowrap;
}

.separator-icons {
  margin-left: 38px;
  display: flex;
  flex-direction: column;
}

.separator-icon-1 {
  border-radius: 6px;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
}

.separator-icon-2 {
  border-radius: 6px;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-top: 24px;
}

.font-and-size-selectors {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.font-family-select {
  min-width: 265px;
}

.font-size-select {
  min-width: 122px;
  margin-left: 2px;
}

.bold-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 30px;
  margin-left: 20px;
  height: 30px;
}

.italic-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 30px;
  margin-left: 26px;
  height: 30px;
}

.bold-toggle-icon {
  color: #333333;
  font-size: 16px;
  width: 16px;
  margin-left: 66px;
  height: 16px;
}

.underline-icon {
  border-radius: 16px;
  flex-shrink: 0;
  width: 30px;
  margin-left: 30px;
  height: 30px;
}

.text-style-icons {
  margin-top: 8px;
  align-self: flex-start;
  margin-left: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.highlight-icon {
  border-radius: 6px;
  flex-shrink: 0;
  width: 25px;
  height: 26px;
}

.italic-toggle-icon {
  color: #333333;
  font-size: 26px;
  width: 26px;
  margin-left: 30px;
  height: 26px;
}

.underline-toggle-icon {
  color: #333333;
  font-size: 26px;
  width: 26px;
  margin-left: 34px;
  height: 26px;
}

.highlight-dropdown-icon {
  color: #333333;
  font-size: 12px;
  width: 12px;
  margin-left: 12px;
  height: 12px;
}

.font-color-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 28px;
  margin-left: 30px;
  height: 26px;
}

.background-color-icon {
  border-radius: 4px;
  flex-shrink: 0;
  width: 25px;
  margin-left: 52px;
  height: 26px;
}

.text-align-left-icon {
  border-radius: 16px;
  flex-shrink: 0;
  width: 30px;
  margin-left: 30px;
  height: 28px;
}

.text-align-left-toggle-icon {
  color: #333333;
  font-size: 12px;
  width: 12px;
  margin-left: 8px;
  height: 12px;
}

.text-align-center-icon {
  border-radius: 14px;
  flex-shrink: 0;
  width: 32px;
  margin-left: 28px;
  height: 32px;
}

.text-align-center-toggle-icon {
  color: #333333;
  font-size: 20px;
  width: 20px;
  margin-left: 6px;
  height: 20px;
}

.text-align-right-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 40px;
  margin-left: 18px;
  height: 44px;
}

.text-align-right-toggle-icon {
  color: #333333;
  font-size: 16px;
  width: 16px;
  margin-left: 2px;
  height: 16px;
}

.more-formatting-button {
  margin-left: 20px;
  height: 44px;
}

.more-formatting-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: block;
}

.paragraph-settings {
  border-radius: 28px;
  background-color: #ffffff;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 6px;
  align-items: flex-start;
}

.line-spacing-container {
  margin-left: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.line-spacing-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
}

.line-spacing-toggle-icon {
  color: #333333;
  font-size: 26px;
  width: 26px;
  margin-left: 5px;
  height: 26px;
}

.bullets-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 30px;
  margin-left: 20px;
  height: 30px;
}

.list-icons {
  margin-top: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bullets-list-icon {
  color: #333333;
  font-size: 26px;
  width: 26px;
  height: 26px;
}

.multi-level-list-icon {
  color: #333333;
  font-size: 26px;
  width: 26px;
  margin-left: 28px;
  height: 26px;
}

.alignment-tools {
  margin-left: 18px;
  display: flex;
  flex-direction: column;
}

.align-left-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  align-self: center;
}

.alignment-button-wrapper {
  border-radius: 12px;
  background-color: #ffffff;
  margin-top: 14px;
  padding: 2px 2px 0px 2px;
}

.alignment-menu-button {
  border: none;
  height: 50px;
}

.advanced-formatting {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
}

.column-settings {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
}

.one-column-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  margin-left: 2px;
}

.two-column-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-top: 22px;
}

.more-columns {
  margin-left: 26px;
  display: flex;
  flex-direction: column;
}

.three-column-toggle-icon {
  color: #333333;
  font-size: 24px;
  width: 24px;
  margin-left: 5px;
  height: 24px;
}

.text-direction-container {
  margin-top: 24px;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.text-direction-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 30px;
  height: 32px;
}

.text-direction-toggle-icon {
  color: #333333;
  font-size: 20px;
  width: 20px;
  margin-left: 4px;
  height: 20px;
}

.border-settings {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22;
}

.border-style-icon {
  border-radius: 10px;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
}

.border-style-toggle-icon {
  color: #333333;
  font-size: 24px;
  width: 24px;
  margin-left: 6px;
  height: 24px;
}

.border-color-icon {
  border-radius: 16px;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
}

.border-weight-icon {
  border-radius: 4px;
  flex-shrink: 0;
  width: 34px;
  height: 28px;
}

.shading-settings {
  margin-top: 22px;
  margin-left: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.shading-preview {
  background-color: #d8d8d8;
  width: 3px;
  height: 37px;
}

.shading-color-container {
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.shading-color-icon {
  border-radius: 12px;
  flex-shrink: 0;
  width: 30px;
  height: 32px;
}

.shading-more-icon {
  border-radius: 4px;
  flex-shrink: 0;
  width: 30px;
  margin-left: 20px;
  height: 32px;
}

.shading-none-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 14px;
  margin-left: 12px;
  height: 10px;
}

.vertical-text-symbol {
  color: #757575;
  font-size: 16px;
  margin-top: 6px;
  margin-left: 314px;
}

.document-navigation {
  margin-left: 12px;
  display: flex;
  flex-direction: row;
}

.document-style-segmented {
  align-self: flex-start;
  margin-top: 18px;
}

.navigation-tools {
  border-radius: 22px;
  background-color: #ffffff;
  border-color: #cbcbc9;
  border-style: solid;
  border-width: 2px;
  margin-left: 10px;
  align-self: center;
  display: flex;
  flex-direction: row;
  padding-left: 6px;
  padding-top: 2px;
}

.find-replace-section {
  border-radius: 14px;
  background-color: #ffffff;
  border-color: #d3d3d3;
  border-style: solid;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  padding: 18px 32px 26px 35px;
}

.find-container {
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.search-tool-icon {
  color: #333333;
  font-size: 32px;
  width: 32px;
  height: 32px;
}

.find-text {
  color: #252525;
  font-size: 26px;
  margin-left: 8px;
  white-space: nowrap;
}

.select-container {
  margin-top: 16px;
  align-self: flex-start;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.select-icon {
  border-radius: 16px;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
}

.layout-tools {
  border-radius: 20px;
  background-color: #ffffff;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  padding: 22px 168px 32px 26px;
}

.text-layout-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 40px;
  height: 36px;
  align-self: center;
  margin-left: 10px;
}

.text-layout-text {
  color: #252525;
  font-size: 26px;
  margin-top: 12px;
  white-space: nowrap;
}

.arrange-container {
  margin-left: 45px;
  display: flex;
  flex-direction: column;
}

.arrange-icon {
  border-radius: 10px;
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  align-self: flex-end;
}

.status-bar {
  position: relative;
}

.status-bar-background {
  border-radius: 2px;
  flex-shrink: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 916px;
  top: 0px;
}

.page-numbers {
  align-self: flex-start;
  margin-left: 5px;
  display: flex;
  flex-direction: row;
}

.page-number-icon-1 {
  flex-shrink: 0;
  border-radius: 5px;
  width: 26px;
  height: 26px;
  margin-top: 6px;
}

.page-number-icon-2 {
  flex-shrink: 0;
  border-radius: 5px;
  width: 18px;
  margin-left: 818px;
  height: 22px;
  margin-top: 10px;
}

.page-number-icon-3 {
  border-radius: 10px;
  flex-shrink: 0;
  width: 28px;
  margin-left: 45px;
  height: 30px;
  align-self: flex-end;
}

.page-number-icon-4 {
  border-radius: 4px;
  flex-shrink: 0;
  width: 16px;
  margin-left: 45px;
  height: 22px;
  margin-top: 10px;
}

.page-number-icon-5 {
  flex-shrink: 0;
  border-radius: 5px;
  width: 16px;
  margin-left: 52px;
  height: 24px;
  margin-top: 8px;
}

.page-number-icon-6 {
  flex-shrink: 0;
  border-radius: 5px;
  width: 20px;
  margin-left: 50px;
  height: 24px;
  margin-top: 8px;
}

.page-number-icon-7 {
  flex-shrink: 0;
  border-radius: 5px;
  width: 20px;
  margin-left: 48px;
  height: 24px;
  margin-top: 8px;
}

.page-number-icon-8 {
  border-radius: 6px;
  flex-shrink: 0;
  width: 22px;
  margin-left: 48px;
  height: 24px;
  margin-top: 8px;
}

.page-number-icon-9 {
  border-radius: 4px;
  flex-shrink: 0;
  width: 20px;
  margin-left: 46px;
  height: 24px;
  margin-top: 8px;
}

.page-number-icon-10 {
  flex-shrink: 0;
  border-radius: 5px;
  width: 20px;
  margin-left: 48px;
  height: 24px;
  margin-top: 6px;
}

.page-number-icon-11 {
  border-radius: 6px;
  flex-shrink: 0;
  width: 20px;
  margin-left: 48px;
  height: 24px;
  margin-top: 8px;
}

.page-number-text-1 {
  color: #252525;
  font-size: 20px;
  margin-left: 48px;
  align-self: flex-start;
  margin-top: 4px;
  white-space: nowrap;
}

.page-number-icon-12 {
  border-radius: 2px;
  flex-shrink: 0;
  width: 26px;
  margin-left: 46px;
  height: 26px;
  margin-top: 8px;
}

.page-number-icon-13 {
  flex-shrink: 0;
  border-radius: 5px;
  width: 26px;
  margin-left: 40px;
  height: 26px;
  margin-top: 6px;
}

.page-number-icon-14 {
  flex-shrink: 0;
  border-radius: 5px;
  width: 26px;
  margin-left: 42px;
  height: 26px;
  margin-top: 6px;
}

.page-number-icon-15 {
  border-radius: 4px;
  flex-shrink: 0;
  width: 26px;
  margin-left: 42px;
  height: 26px;
  margin-top: 8px;
}

.page-number-text-2 {
  color: #252525;
  font-size: 20px;
  margin-left: 44px;
  align-self: flex-start;
  margin-top: 4px;
  white-space: nowrap;
}

.page-number-icon-19 {
  border-radius: 6px;
  flex-shrink: 0;
  width: 26px;
  margin-left: 42px;
  height: 26px;
  margin-top: 8px;
}

.page-number-icon-20 {
  border-radius: 4px;
  flex-shrink: 0;
  width: 26px;
  margin-left: 42px;
  height: 26px;
  margin-top: 6px;
}

.page-number-text-3 {
  color: #5b5b5a;
  font-size: 32px;
  margin-left: 34px;
  align-self: center;
  white-space: nowrap;
}

.page-number-icon-21 {
  border-radius: 6px;
  flex-shrink: 0;
  width: 26px;
  margin-left: 38px;
  height: 26px;
  margin-top: 6px;
}

.page-number-text-4 {
  color: #222222;
  font-size: 20px;
  margin-left: 44px;
  align-self: flex-start;
  margin-top: 5px;
  white-space: nowrap;
}

.document-statistics {
  margin-top: 46px;
  display: flex;
  flex-direction: row;
}

.statistics-container {
  max-width: 125px;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.statistics-checkbox {
  white-space: nowrap;
  margin-left: 4px;
}

.statistic-value-1 {
  color: #252525;
  font-size: 16px;
  margin-top: 284px;
  margin-left: 6px;
}

.statistic-value-2 {
  color: #252525;
  font-size: 18px;
  margin-top: 25px;
  margin-left: 6px;
}

.statistic-value-3 {
  color: #252525;
  font-size: 18px;
  margin-top: 22px;
  margin-left: 6px;
}

.statistic-value-4 {
  color: #252525;
  font-size: 22px;
  margin-top: 18px;
  margin-left: 4px;
}

.statistic-value-5 {
  color: #252525;
  font-size: 22px;
  margin-top: 16px;
  margin-left: 4px;
}

.statistic-value-7 {
  color: #252525;
  font-size: 14px;
  margin-top: 24px;
  margin-left: 10px;
}

.statistic-value-8 {
  color: #252525;
  font-size: 28px;
  margin-top: 16px;
  margin-left: 2px;
}

.statistic-value-9 {
  color: #252525;
  font-size: 14px;
  margin-top: 18px;
  margin-left: 8px;
}

.statistic-operator {
  color: #a9a9a9;
  font-size: 28px;
  margin-top: 18px;
}

.statistic-value-10 {
  color: #252525;
  font-size: 26px;
  margin-top: 8px;
}

.statistic-value-11 {
  color: #252525;
  font-size: 22px;
  margin-top: 14px;
  margin-left: 8px;
}

.statistic-value-12 {
  color: #252525;
  font-size: 26px;
  margin-top: 12px;
  margin-left: 10px;
}

.statistic-value-13 {
  color: #252525;
  font-size: 22px;
  margin-top: 15px;
  margin-left: 10px;
}

.statistic-value-15 {
  color: #252525;
  font-size: 26px;
  margin-top: 12px;
  margin-left: 2px;
}

.statistic-value-16 {
  color: #252525;
  font-size: 22px;
  margin-top: 10px;
}

.statistic-value-17 {
  color: #252525;
  font-size: 22px;
  margin-top: 18px;
  margin-left: 10px;
}

.statistic-value-18 {
  color: #252525;
  font-size: 14px;
  max-width: 32px;
  margin-top: 12px;
}

.statistic-value-19 {
  color: #252525;
  font-size: 20px;
  margin-top: 15px;
  margin-left: 2px;
}

.statistic-value-20 {
  color: #252525;
  font-size: 10px;
  margin-top: 20px;
  margin-left: 8px;
}

.page-count-text {
  color: #252525;
  font-size: 26px;
  margin-top: 2px;
  margin-left: 26px;
}

.word-count-text {
  color: #252525;
  font-size: 28px;
  margin-left: 58px;
  align-self: flex-end;
  margin-bottom: 4px;
  white-space: nowrap;
}

.spell-check-status {
  color: #252525;
  font-size: 26px;
  margin-left: 56px;
  align-self: flex-end;
  margin-bottom: 6px;
  white-space: nowrap;
}

.spell-check-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 16px;
  margin-left: 15px;
  height: 14px;
  align-self: flex-end;
  margin-bottom: 18px;
}

.document-content {
  margin-left: 56px;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.content-section-1 {
  border-radius: 12px;
  background-color: #ffffff;
  border-color: #cdcdcb;
  border-style: solid;
  border-width: 1px;
  width: 96%;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  padding: 176px 292px 1005px 200px;
}

.content-block-1 {
  margin-left: 35px;
  display: flex;
  flex-direction: row;
}

.content-variant-1 {
  background-color: #ffffff;
  width: 61px;
  height: 3px;
  align-self: center;
}

.content-text-1 {
  color: #000000;
  font-size: 34px;
  flex: 1;
  align-self: flex-end;
  white-space: nowrap;
}

.content-variant-2 {
  background-color: #ffffff;
  width: 3px;
  margin-left: 4px;
  height: 57px;
}

.content-section-2 {
  margin-top: 2px;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.content-image {
  border-radius: 2px;
  flex-shrink: 0;
  width: 22px;
  height: 32px;
}

.content-text-2 {
  color: #000000;
  font-size: 34px;
  margin-left: 72px;
  white-space: nowrap;
}

.status-indicators {
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.proofing-text {
  color: #252525;
  font-size: 28px;
  white-space: nowrap;
}

.proofing-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 28px;
  margin-left: 50px;
  height: 28px;
}

.backup-status {
  color: #252525;
  font-size: 26px;
  margin-left: 6px;
  white-space: nowrap;
}

.backup-icon {
  border-radius: 12px;
  flex-shrink: 0;
  width: 26px;
  margin-left: 1336px;
  height: 28px;
}

.return-text {
  color: #333333;
  font-size: 48px;
  margin-left: 46px;
  white-space: nowrap;
}

.language-settings {
  border-radius: 22px;
  background-color: #e5e5e3;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 26px 5px 24px;
}

.language-text {
  color: #333333;
  font-size: 26px;
  white-space: nowrap;
}

.language-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 30px;
  margin-left: 94px;
  height: 28px;
}

.direction-text {
  color: #333333;
  font-size: 52px;
  margin-left: 20px;
  white-space: nowrap;
}

.zoom-percentage {
  color: #444f64;
  font-size: 26px;
  margin-left: 30px;
  align-self: flex-end;
  margin-bottom: 6px;
  white-space: nowrap;
}

.zoom-out-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 18px;
  margin-left: 20px;
  height: 12px;
  align-self: flex-end;
  margin-bottom: 20px;
}

.zoom-in-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 26px;
  margin-left: 30px;
  height: 25px;
  align-self: flex-end;
  margin-bottom: 12px;
}

.full-screen-icon {
  border-radius: 4px;
  flex-shrink: 0;
  width: 24px;
  margin-left: 134px;
  height: 22px;
  align-self: flex-end;
  margin-bottom: 16px;
}

.reading-layout-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 25px;
  margin-left: 108px;
  height: 26px;
  align-self: flex-end;
  margin-bottom: 12px;
}

.print-icon {
  flex-shrink: 0;
  border-radius: 5px;
  width: 28px;
  margin-left: 40px;
  height: 30px;
  align-self: flex-end;
  margin-bottom: 10px;
}

.save-icon {
  border-radius: 2px;
  flex-shrink: 0;
  width: 16px;
  margin-left: 8px;
  height: 14px;
  align-self: flex-end;
  margin-bottom: 60px;
}
</style>
