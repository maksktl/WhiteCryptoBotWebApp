<template style="background: var(--tg-theme-bg-color)">
  <div class="general_theme" >
    <a-row type="flex" align="middle" justify="center" >
      <a-col :span="24" :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
        <a-card style="background: var(--tg-theme-bg-color)">
          <a-form class="configuration_form">
            <a-form-item>
              <h3 style="color: var(--tg-theme-text-color)">💰 Фиат</h3>
              <a-select v-model="selectedCurrency" style="width: 100px" >
                <a-select-option v-for="currency in currencies" :key="currency.value" :value="currency.value">
                  {{ currency.label }}
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item>
              <h3 style="color: var(--tg-theme-text-color)">💼 Актив</h3>
              <a-select v-model="selectedAsset" style="width: 100px">
                <a-select-option v-for="asset in assets" :key="asset.value" :value="asset.value">
                  {{ asset.label }}
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item>
              <h3 style="color: var(--tg-theme-text-color)">💸 Депозит</h3>
              <a-input-number v-model="deposit" style="width: 100px" :min="0" placeholder="💸 Депозит"></a-input-number>
            </a-form-item>
            <a-divider style="height: 2px; background-color: #222"/>
            <h2 style="color: var(--tg-theme-text-color)">💱 Биржа 1</h2>
            <a-card  style="background: var(--tg-theme-bg-color)">
              <a-button v-for="exchange in exchanges" :key="exchange.value" :value="exchange.value"
                        @click="handleSelectExchange1(exchange)"
                        v-bind:type="selectedExchanges1.includes(exchange.value) ? 'primary' : 'danger'">
                {{ exchange.label }}
              </a-button>
            </a-card>
            <h2 style="color: var(--tg-theme-text-color)">💱 Биржа 2</h2>
            <a-card  style="background: var(--tg-theme-bg-color)">
              <a-button v-for="exchange in exchanges" :key="exchange.value" :value="exchange.value"
                        @click="handleSelectExchange2(exchange)"
                        v-bind:type="selectedExchanges2.includes(exchange.value) ? 'primary' : 'danger'">
                {{ exchange.label }}
              </a-button>
            </a-card>
            <a-divider style="height: 2px; background-color: #222"/>
            <a-form-item>
              <h2 style="color: var(--tg-theme-text-color)">📈 Стратегия</h2>
              <a-select v-model="selectedStrategy" style="width: 200px">
                <a-select-option v-for="strategy in strategies" :key="strategy.value" :value="strategy.value">
                  {{ strategy.label }}
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item>
              <h2 style="color: var(--tg-theme-text-color)">💳 Метод оплаты</h2>
              <a-button-group>
                <a-button v-for="method in paymentMethods" :key="method.value"
                          :type="selectedPaymentMethods.includes(method.value) ? 'primary' : 'danger'"
                          @click="toggleSelectedPaymentMethod(method)">{{ method.label }}
                </a-button>
              </a-button-group>
            </a-form-item>
            <a-form-item>
              <a-button class="tg-button" type="primary" @click="saveConfiguration">💾 Сохранить конфигурацию</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import {Select, Option, Checkbox, CheckboxGroup, Input, Form, FormItem, Card, InputNumber} from 'ant-design-vue'

export default {
  components: {
    'a-select': Select,
    'a-select-option': Option,
    'a-form': Form,
    'a-form-item': FormItem,
    'a-card': Card,
    'a-input-number': InputNumber
  },
  data() {
    return {
      currencies: [
        {value: 'USD', label: 'USD'},
        {value: 'RUB', label: 'RUB'},
        {value: 'KZT', label: 'KZT'},
        {value: 'UAH', label: 'UAH'},
        {value: 'EUR', label: 'EUR'},
      ],
      assets: [
        {value: 'BTC', label: 'BTC'},
        {value: 'USDT', label: 'USDT'},
        {value: 'BUSD', label: 'BUSD'},
        {value: 'BNB', label: 'BNB'},
        {value: 'ETH', label: 'ETH'},
        {value: 'RUB', label: 'RUB'},
        {value: 'SHIB', label: 'SHIB'},
      ],
      selectedCurrency: '',
      selectedAsset: '',
      deposit: 0,
      exchanges: [
        {value: 'binance', label: 'Binance'},
        {value: 'bitfinex', label: 'Bitfinex'},
        {value: 'bittrex', label: 'Bittrex'},
      ],
      selectedExchanges1: [],
      selectedExchanges2: [],
      strategies: [
        {value: 'maker_maker', label: 'Мейкер-Мейкер'},
        {value: 'maker_taker', label: 'Мейкер-Тейкер'},
        {value: 'taker_maker', label: 'Тейкер-Мейкер'},
        {value: 'taker_taker', label: 'Тейкер-Тейкер'},
      ],
      selectedStrategy: '',
      paymentMethods: [
        {value: 'credit_card', label: 'Credit Card'},
        {value: 'bank_transfer', label: 'Bank Transfer'},
        {value: 'crypto', label: 'Crypto'},
      ],
      selectedPaymentMethods: [],
    }
  },
  methods: {
    saveConfiguration() {
      // code to save the configuration
    },
    handleSelectExchange1(exchange) {
      if (this.selectedExchanges1.includes(exchange.value)) {
        this.selectedExchanges1 = this.selectedExchanges1.filter(e => e !== exchange.value)
      } else {
        this.selectedExchanges1.push(exchange.value)
      }
    },
    handleSelectExchange2(exchange) {
      if (this.selectedExchanges2.includes(exchange.value)) {
        this.selectedExchanges2 = this.selectedExchanges2.filter(e => e !== exchange.value)
      } else {
        this.selectedExchanges2.push(exchange.value)
      }
    },
    toggleSelectedPaymentMethod(method) {
      if (this.selectedPaymentMethods.includes(method.value)) {
        this.selectedPaymentMethods = this.selectedPaymentMethods.filter(m => m !== method.value)
      } else {
        this.selectedPaymentMethods.push(method.value)
      }
    }
  },
}
</script>

<style>
.ant-form {
  width: 80%;
  background: var(--tg-theme-bg-color);
}
.tg-button {
  padding: 10px 15px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-text-color);
  border: none;
  outline: none;
  cursor: pointer;
}

</style>