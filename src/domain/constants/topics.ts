import * as Settings from '@src/server/settings';

export const topics = {
  UPDATE_CONTAINER: `update_container_${Settings.CONTEXT_TOPIC}`,
  UPDATE_PRODUCT: `update_product_store_group_${Settings.STORE_GROUP_ID}`
};
