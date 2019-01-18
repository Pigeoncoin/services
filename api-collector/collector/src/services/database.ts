import admin from "firebase-admin";

import { ChainData } from "./__types__/chain.types";
import { MarketData } from "./__types__/market.types";
import { PoolData } from "./__types__/pool.types";

export class DatabaseService {
  constructor(private _db: admin.database.Database) {}

  private _chainRef = this._db.ref(`/latestData/chain`);
  private _marketRef = this._db.ref(`/latestData/market`);
  private _poolRef = this._db.ref(`/latestData/pool`);

  public async updateLatestChain(chainData: ChainData) {
    this._chainRef.update(chainData);
  }

  public async updateLatestMarket(marketData: MarketData) {
    this._marketRef.update(marketData);
  }

  public async updateLatestPool(poolData: PoolData) {
    this._poolRef.update(poolData);
  }
}
