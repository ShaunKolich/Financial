import './grid.css'
import '../less/pricelead.css'

import PricingTable from './PricingTable';
import PricingSlot from './PricingSlot';
import PricingDetail from './PricingDetail';

if (typeof window !== 'undefined') {
  window.PricingTable = PricingTable;
  window.PricingSlot = PricingSlot;
  window.PricingDetail = PricingDetail;
}

export {
  PricingTable,
  PricingSlot,
  PricingDetail,
};
