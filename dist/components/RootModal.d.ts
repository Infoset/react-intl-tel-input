/* eslint-disable react/no-unused-class-component-methods */
import React from 'react'

export interface RootModalProps {}

export interface RootModalState {}

export default class RootModal extends React.Component<
  RootModalProps,
  RootModalState
> {
  modalTarget: HTMLDivElement | null
}
