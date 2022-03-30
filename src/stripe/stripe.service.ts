import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export default class StripeService{
  private stripe: Stripe;

  constructor(
      private configService : ConfigService
      ){
          this.stripe = new Stripe( configService.get('STRIPE_SECRET_KEY'), {
              apiVersion: '2020-08-27'
          })
      }

    //create stripe customer


    //charge customer


}  